"""2026-09-05: construit les landings et leur annuaire depuis des releves verifies.

Aucun acces reseau ni mutation Shopify. Les exports bruts restent hors Git.
Les produits star sont choisis dans stone_landing_profiles.py, jamais au hasard.
"""
import argparse
import copy
import html
import json
import re
from pathlib import Path

from stone_landing_profiles import EXPLICIT_MEMBERS, PROFILES, VARIANT_PROFILES

ROOT = Path(__file__).resolve().parents[1]
JEWEL_TYPES = {'bague', 'boucles-oreilles', 'bracelet', 'chapelet', 'collier', 'pendentif'}
EDITORIAL = {'agate', 'aigue-marine', 'amazonite', 'amethyste', 'lapis-lazuli', 'quartz-rose'}
SHOPIFY_HEADER = """/*
 * ------------------------------------------------------------
 * IMPORTANT: The contents of this file are auto-generated.
 *
 * This file may be updated by the Shopify admin theme editor
 * or related systems. Please exercise caution as any changes
 * made to this file may be overwritten.
 * ------------------------------------------------------------
 */
"""


def read_json(path):
    return json.loads(re.sub(r'^\s*/\*.*?\*/', '', Path(path).read_text(), flags=re.S))


def save(path, value):
    path = Path(path)
    prefix = ''
    if path.parent.name == 'templates':
        prefix = SHOPIFY_HEADER
        normalize_settings = any('blocks' in s and not s['blocks'] for s in value['sections'].values())
        for section in value['sections'].values():
            for key in ('blocks', 'block_order'):
                if key in section and not section[key]:
                    section.pop(key)
            # Shopify reordonne les reglages selon le schema lorsqu'il retire
            # un bloc vide. Reproduire ce format rend le pullback comparable.
            if normalize_settings:
                source = (ROOT / 'sections' / (section['type'] + '.liquid')).read_text()
                schema = json.loads(re.search(r'{% schema %}(.*?){% endschema %}', source, flags=re.S).group(1))
                settings = section.get('settings', {})
                ordered = {s['id']: settings[s['id']] for s in schema.get('settings', []) if s.get('id') in settings}
                section['settings'] = {**ordered, **settings}
    path.write_text(prefix + json.dumps(value, ensure_ascii=False, indent=2) + '\n')


def paragraph(value):
    return '<p>' + html.escape(value, quote=False) + '</p>'


def fields(product):
    return {x['key']: x['value'] for x in product['metafields']['nodes']}


def handles(product):
    data = fields(product)
    result = {data.get('stone_handle', '')}
    result.update(json.loads(data.get('stone_handles', '[]')))
    result.update(tag[7:] for tag in product['tags'] if tag.startswith('pierre:'))
    return result - {''}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--products', type=Path, required=True)
    parser.add_argument('--public-products', type=Path, required=True)
    parser.add_argument('--collections', type=Path, required=True)
    parser.add_argument('--manifest', type=Path, required=True)
    args = parser.parse_args()
    products = read_json(args.products)
    by_id = {p['id'].split('/')[-1]: p for p in products}
    available = {str(p['id']) for p in read_json(args.public_products)['products']
                 if any(v['available'] for v in p['variants'])}
    collections = {c['handle']: c for c in read_json(args.collections)['collections']['nodes']}
    public = {str(p['id']) for p in read_json(args.public_products)['products']}
    jewellery = [p for p in products if p['id'].split('/')[-1] in available
                 and p['onlineStoreUrl'] and p['status'] == 'ACTIVE'
                 and fields(p).get('product_type_handle') in JEWEL_TYPES
                 # Le bracelet en bois de palo santo appartient aux bijoux,
                 # mais sa matiere ne constitue pas une pierre.
                 and p['id'] != 'gid://shopify/Product/10669859209563']
    hub = read_json(ROOT / 'templates/page.milaura-bijoux-pierre.json')
    hub['sections']['hub']['blocks'] = {}
    hub['sections']['hub']['block_order'] = []
    hub['sections']['hub']['settings'] = {'destinations_anchor': 'MilauraStoneDirectory',
                                         **hub['sections']['hub']['settings']}
    directory = {'type': 'milaura-stone-directory', 'blocks': {}, 'block_order': [],
                 'settings': {'eyebrow': 'Choisir votre pierre', 'heading': 'Toutes les pierres',
                              'text': 'Couleurs, bijoux et conseils : retrouvez chaque pierre, seule ou associée à d’autres.',
                              'preview_mode': False}}
    manifest = {'date': '2026-09-05', 'preview_theme_id': 200974958939, 'destinations': []}
    for profile in PROFILES + VARIANT_PROFILES:
        slug, name = profile['slug'], profile['name']
        sentence_name = name[0].lower() + name[1:]
        masculine = {'corail-fossile', 'cristal-de-roche', 'grenat', 'jade', 'jaspe', 'jaspe-rouge', 'lapis-lazuli', 'quartz-rose', 'quartz-fraise'}
        if sentence_name[0] in 'aeiouœ' or slug == 'hematite':
            article = 'l’'
        else:
            article = 'le ' if slug in masculine else 'la '
        star = by_id[profile['star_id']]
        assert star['status'] == 'ACTIVE' and profile['star_id'] in public, name
        assert len(star['images']['nodes']) >= 3, name
        selected = [p for p in jewellery if handles(p).intersection(profile['aliases'])]
        for product_id in EXPLICIT_MEMBERS.get(slug, []):
            assert product_id in available, (slug, product_id)
            selected.append(by_id[product_id])
        selected.append(star)
        selected = sorted({p['id']: p for p in selected}.values(), key=lambda p: p['title'])
        assert len(selected) <= 48, name
        assert all(p['id'].split('/')[-1] in public for p in selected), name
        handle = 'par-pierre-' + slug
        suffix = 'milaura-pierre-' + slug
        blocks = {'p' + p['id'].split('/')[-1]: {'type': 'product', 'settings': {'product': p['handle']}}
                  for p in selected if p['id'] != star['id']}
        mf = fields(star)
        specs = json.loads(mf.get('specifications', '[]'))
        dimensions = [s['label'] + ' : ' + s['value'] for s in specs
                      if s.get('label') in ('Longueur', 'Dimensions', 'Taille de pierre', 'Taille de la pierre')]
        star_text = paragraph(profile['colors'])
        if dimensions:
            star_text += paragraph(' · '.join(dimensions))
        care = ('Retirez le bijou avant la douche, le sport et l’application de parfum. '
                'Essuyez-le avec un chiffon doux, puis rangez-le séparément pour limiter les frottements.')
        if fields(star).get('product_type_handle') == 'bracelet':
            care += ' Enfilez le bracelet sans tirer fortement sur son fil ou sa chaînette.'
        elif fields(star).get('product_type_handle') == 'boucles-oreilles':
            care += ' Rangez les deux boucles ensemble, sans laisser les attaches frotter contre les pierres.'
        elif fields(star).get('product_type_handle') == 'collier':
            care += ' Posez le collier à plat pour éviter les nœuds et les tensions sur son montage.'
        else:
            care += ' Gardez le pendentif à l’écart des bijoux qui pourraient rayer sa surface.'
        benefits = paragraph('En lithothérapie, cette pierre est associée aux notions de ' + profile['symbolism'] + '.')
        benefits += paragraph('Vous pouvez la choisir pour cette symbolique autant que pour sa couleur. Ces associations relèvent du bien-être et ne constituent pas un soin médical.')
        if slug == 'quartz-fraise':
            benefits = paragraph('Le bracelet Calysta réunit quartz fraise hématoïde, quartz rose et cristal de roche. Dans cette association, la douceur et l’amour sont les symboliques du quartz rose mises en avant sur la fiche du bijou.')
            benefits += paragraph('La lithothérapie relève d’une pratique de bien-être ; elle ne constitue pas un soin médical.')
        template = {'sections': {
            'hero': {'type': 'milaura-stone-hero', 'settings': {
                'heading': name, 'introduction': paragraph(profile['colors']),
                'product': star['handle'], 'desktop_image_index': 3, 'mobile_image_index': 2,
                'image_alt': star['title'], 'dark_text': slug not in {'amethyste', 'lapis-lazuli'},
                'hub_url': '/pages/bijoux-par-pierre'}},
            'campaign': {'type': 'milaura-campaign-landing', 'blocks': blocks, 'block_order': list(blocks),
                         'settings': {'tone': 'nacre', 'featured_product': star['handle'],
                                      'star_label': 'Le produit star', 'star_title': star['title'],
                                      'star_text': star_text, 'star_cta_label': 'Découvrir le bijou',
                                      'primary_image_index': 1, 'secondary_image_index': 2, 'tertiary_image_index': 3,
                                      'primary_image_position': 'center center', 'secondary_image_position': 'center center',
                                      'tertiary_image_position': 'center center', 'catalogue_mode': 'curated',
                                      'hide_empty_catalogue': True, 'catalogue_eyebrow': 'La sélection complète',
                                      'catalogue_title': 'Les bijoux en ' + sentence_name, 'show_badges': True}},
            'stone_guide': {'type': 'milaura-stone-guide', 'settings': {
                'prefer_section_content': True, 'stone_name': name, 'eyebrow': 'Guide de la pierre',
                'title': 'Tout savoir sur ' + article + sentence_name, 'lead': 'Symbolique, choix du bijou et entretien.',
                'intro_text': paragraph(profile['colors']), 'benefits_text': benefits,
                'benefits_tab_label': 'Vertus & symbolique', 'benefits_heading': name + ' : vertus et symbolique',
                'benefits_product': star['handle'], 'benefits_image_index': 3,
                'wear_tab_label': 'Choisir & porter', 'wear_heading': 'Choisir et porter votre bijou',
                'wear_text': paragraph(profile['wear']), 'colors_text': profile['colors'],
                'wear_product': star['handle'], 'wear_image_index': 2,
                'care_tab_label': 'Entretien', 'care_heading': 'Préserver votre bijou',
                'care_text': paragraph(care), 'care_product': star['handle'], 'care_image_index': 1}},
            'return': {'type': 'milaura-stone-return', 'settings': {}}
        }, 'order': ['hero', 'campaign', 'stone_guide', 'return']}
        if slug in EDITORIAL:
            for device in ('desktop', 'mobile'):
                asset = 'milaura-hero-editorial-collection-' + slug + '-' + device + '.webp'
                assert (ROOT / 'assets' / asset).exists(), asset
                template['sections']['hero']['settings'][device + '_asset'] = asset
        if slug == 'aigue-marine':
            original = read_json(ROOT / 'templates/collection.milaura-campaign-aigue.json')
            template['sections']['hero'] = original['sections']['hero']
            template['sections']['campaign']['settings'] = original['sections']['campaign']['settings']
            template['sections']['stone_guide'] = original['sections']['stone_guide']
            template['sections']['stone_guide']['settings']['source_collection'] = handle
        elif slug == 'sodalite':
            template = read_json(ROOT / 'templates/collection.selection-de-karine.json')
            template['sections']['seasonal_collection']['blocks'] = blocks
            template['sections']['seasonal_collection']['block_order'] = list(blocks)
            template['sections']['return'] = {'type': 'milaura-stone-return', 'settings': {}}
            template['order'].append('return')
        save(ROOT / ('templates/collection.' + suffix + '.json'), template)
        # Les collections existantes gardent leur URL ; les nouvelles sont testees
        # sur /collections/all avec une selection explicite, tant qu'elles sont privees.
        preview_path = '/collections/' + (handle if handle in collections else 'all') + '?view=' + suffix
        if slug == 'sodalite':
            preview_path = '/collections/par-pierre-sodalite?view=' + suffix
        source_image = star['images']['nodes'][2]
        card = {'heading': name, 'body': profile['colors'], 'collection': handle,
                'link': '/collections/' + handle, 'preview_link': preview_path,
                'image_url': source_image['url'], 'image_alt': star['title'],
                'piece_count': len(selected), 'row_label': 'Découvrir les pierres'}
        # Conserver les photographies des cinq cartes deja validees.
        if slug in {'aigue-marine', 'quartz-rose', 'lapis-lazuli', 'amazonite', 'agate'}:
            existing = collections.get(handle, {})
            if existing.get('image'):
                card['image_url'] = existing['image']['url']
                card['image_alt'] = existing['image'].get('altText') or name
        if profile.get('directory', True):
            directory['blocks'][slug] = {'type': 'stone', 'settings': card}
            directory['block_order'].append(slug)
        existing = collections.get(handle)
        current = {p['id'] for p in existing['products']['nodes']} if existing else set()
        manifest['destinations'].append({
            'slug': slug, 'name': name, 'handle': handle, 'template_suffix': suffix,
            'directory': profile.get('directory', True),
            'collection_id': existing['id'] if existing else None,
            'previous_template': existing['templateSuffix'] if existing else None,
            'star_id': star['id'], 'star_handle': star['handle'],
            'product_ids': [p['id'] for p in selected], 'product_handles': [p['handle'] for p in selected],
            'missing_ids': [p['id'] for p in selected if p['id'] not in current],
            'aliases': profile['aliases'], 'description_html': paragraph(profile['colors']),
            'image_url': card['image_url'], 'preview_path': preview_path})
    hub['sections']['directory'] = directory
    hub['order'] = ['hub', 'directory']
    save(ROOT / 'templates/page.milaura-bijoux-pierre.json', hub)
    preview = copy.deepcopy(hub)
    preview['sections']['directory']['settings']['preview_mode'] = True
    save(ROOT / 'templates/page.milaura-stones-preview.json', preview)
    covered = {id for d in manifest['destinations'] for id in d['product_ids']}
    missing = [p['title'] for p in jewellery if p['id'] not in covered]
    assert not missing, ('Bijoux non couverts', missing)
    assert len({d['handle'] for d in manifest['destinations']}) == len(PROFILES + VARIANT_PROFILES)
    manifest['distinct_products'] = len(covered)
    save(args.manifest, manifest)
    print(json.dumps({'destinations': len(PROFILES), 'distinct_products': len(covered),
                      'largest_selection': max(len(d['product_ids']) for d in manifest['destinations']),
                      'new_collections': sum(d['collection_id'] is None for d in manifest['destinations']),
                      'manifest': str(args.manifest)}, ensure_ascii=False))


if __name__ == '__main__':
    main()
