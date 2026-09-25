#!/Library/Developer/CommandLineTools/usr/bin/python3

import argparse
import io
import json
import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter
from rembg import new_session, remove


NACRE_TOP = (255, 253, 249)
NACRE_BOTTOM = (244, 238, 230)


def make_background(size):
    width, height = size
    background = Image.new("RGB", size)
    pixels = background.load()
    for y in range(height):
        t = y / max(1, height - 1)
        row = tuple(round(NACRE_TOP[i] * (1 - t) + NACRE_BOTTOM[i] * t) for i in range(3))
        for x in range(width):
            pixels[x, y] = row
    return background


def make_contact_shadow(size, bbox):
    width, height = size
    shadow = Image.new("RGBA", size, (0, 0, 0, 0))
    if not bbox:
        return shadow
    left, top, right, bottom = bbox
    object_width = right - left
    object_height = bottom - top
    if object_height < height * 0.48 or bottom < height * 0.70:
        return shadow
    ellipse_width = int(object_width * 0.68)
    ellipse_height = max(16, int(object_height * 0.028))
    center_x = (left + right) // 2
    y0 = min(height - ellipse_height - 8, bottom - int(ellipse_height * 0.72))
    draw = ImageDraw.Draw(shadow)
    draw.ellipse(
        (center_x - ellipse_width // 2, y0, center_x + ellipse_width // 2, y0 + ellipse_height),
        fill=(47, 34, 45, 48),
    )
    return shadow.filter(ImageFilter.GaussianBlur(radius=max(10, ellipse_height // 2)))


def process(source_path, output_root, session):
    source_path = Path(source_path)
    source = Image.open(source_path).convert("RGBA")
    source_rgb = source.convert("RGB")
    full_bleed_detail = source_path.name.startswith("04-") or source_path.name.startswith("07-")
    if full_bleed_detail:
        alpha = Image.new("L", source.size, 255)
    else:
        source_bytes = io.BytesIO()
        source.save(source_bytes, format="PNG")
        removed_bytes = remove(
            source_bytes.getvalue(),
            session=session,
            post_process_mask=True,
            alpha_matting=False,
        )
        removed = Image.open(io.BytesIO(removed_bytes)).convert("RGBA")
        alpha = removed.getchannel("A")
    bbox = alpha.getbbox()

    exact_cutout = source.copy()
    exact_cutout.putalpha(alpha)

    corrected_rgb = ImageEnhance.Brightness(source_rgb).enhance(1.07)
    corrected_rgb = ImageEnhance.Contrast(corrected_rgb).enhance(1.08)
    corrected_rgb = ImageEnhance.Color(corrected_rgb).enhance(1.03)
    corrected_rgb = ImageEnhance.Sharpness(corrected_rgb).enhance(1.18)
    corrected = corrected_rgb.convert("RGBA")
    corrected.putalpha(alpha)

    studio_layer = corrected
    studio_bbox = bbox
    studio_transform = "full_bleed_detail" if full_bleed_detail else "original_scale"
    if bbox and not full_bleed_detail:
        left, top, right, bottom = bbox
        object_width = right - left
        object_height = bottom - top
        longest = max(object_width, object_height)
        frame_longest = max(source.size)
        if frame_longest * 0.45 <= longest < frame_longest * 0.82:
            target_longest = int(frame_longest * 0.84)
            scale = target_longest / longest
            resized_width = max(1, round(object_width * scale))
            resized_height = max(1, round(object_height * scale))
            object_crop = corrected.crop(bbox).resize(
                (resized_width, resized_height),
                resample=Image.Resampling.LANCZOS,
            )
            studio_layer = Image.new("RGBA", source.size, (0, 0, 0, 0))
            paste_x = (source.width - resized_width) // 2
            bottom_margin = round(source.height * 0.067)
            paste_y = max(round(source.height * 0.06), source.height - bottom_margin - resized_height)
            studio_layer.alpha_composite(object_crop, (paste_x, paste_y))
            studio_bbox = studio_layer.getchannel("A").getbbox()
            studio_transform = f"scale_{scale:.4f}_target_84pct"

    stem = source_path.stem
    cutout_dir = output_root / "cutouts-png"
    studio_dir = output_root / "studio-png"
    shopify_dir = output_root / "shopify-upload-jpg"
    mask_dir = output_root / "masks"
    for directory in (cutout_dir, studio_dir, shopify_dir, mask_dir):
        directory.mkdir(parents=True, exist_ok=True)

    cutout_path = cutout_dir / f"{stem}-cutout.png"
    mask_path = mask_dir / f"{stem}-mask.png"
    studio_path = studio_dir / f"{stem}-studio.png"
    shopify_path = shopify_dir / f"{stem}-studio.jpg"

    exact_cutout.save(cutout_path, format="PNG", optimize=True)
    alpha.save(mask_path, format="PNG", optimize=True)

    background = make_background(source.size).convert("RGBA")
    background = Image.alpha_composite(background, make_contact_shadow(source.size, studio_bbox))
    studio = Image.alpha_composite(background, studio_layer).convert("RGB")
    studio.save(studio_path, format="PNG", optimize=True)
    studio.save(shopify_path, format="JPEG", quality=95, subsampling=0, optimize=True)

    opaque = alpha.point(lambda value: 255 if value == 255 else 0)
    source_pixels = source_rgb.tobytes()
    cutout_pixels = exact_cutout.convert("RGB").tobytes()
    exact_rgb_preserved = source_pixels == cutout_pixels

    return {
        "source": str(source_path),
        "size": list(source.size),
        "alpha_bbox": list(bbox) if bbox else None,
        "studio_bbox": list(studio_bbox) if studio_bbox else None,
        "studio_transform": studio_transform,
        "alpha_extrema": list(alpha.getextrema()),
        "exact_cutout_rgb_preserved": exact_rgb_preserved,
        "full_bleed_detail": full_bleed_detail,
        "cutout": str(cutout_path),
        "mask": str(mask_path),
        "studio_png": str(studio_path),
        "shopify_jpg": str(shopify_path),
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--output-root", required=True)
    parser.add_argument("inputs", nargs="+")
    args = parser.parse_args()

    output_root = Path(args.output_root)
    output_root.mkdir(parents=True, exist_ok=True)
    session = new_session("u2net")
    records = [process(path, output_root, session) for path in args.inputs]
    print(json.dumps(records, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
