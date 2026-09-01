(() => {
  const selector = '[data-milaura-home-seasonal-media]';

  const initMedia = (root = document) => {
    root.querySelectorAll(selector).forEach((media) => {
      if (media.dataset.homeMediaReady === 'true') return;
      media.dataset.homeMediaReady = 'true';

      const video = media.querySelector('[data-milaura-home-seasonal-video]');
      const replay = media.querySelector('[data-milaura-home-seasonal-replay]');
      if (!video || !replay) return;
      const replayLabel = replay.querySelector('[data-milaura-home-seasonal-replay-label]');

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const mobileViewport = window.matchMedia('(max-width: 749px)');
      const saveData = navigator.connection?.saveData === true;
      let activeSource = '';
      let sourceLoaded = false;
      let inView = false;
      let hasStarted = false;
      let hasCompleted = false;

      const currentVariant = () => (mobileViewport.matches ? 'Mobile' : 'Desktop');
      const currentMediaUrl = (kind) => {
        const variantUrl = video.dataset[`${kind}${currentVariant()}`];
        return variantUrl || video.dataset[`${kind}Desktop`] || '';
      };

      const setReplayVisibility = (visible, mode = 'replay') => {
        replay.hidden = !visible;
        if (!visible) {
          media.dataset.mediaState = hasStarted ? 'playing' : 'idle';
          return;
        }

        const isBlocked = mode === 'blocked';
        replay.setAttribute('aria-label', isBlocked ? 'Lire l’animation' : 'Rejouer la vidéo');
        if (replayLabel) replayLabel.textContent = isBlocked ? 'Lire' : 'Rejouer';
        media.dataset.mediaState = isBlocked ? 'blocked' : 'ended';
      };

      const setPoster = () => {
        const poster = currentMediaUrl('poster');
        if (poster && video.poster !== poster) video.poster = poster;
      };

      const loadSource = () => {
        const source = currentMediaUrl('src');
        if (!source) return false;
        if (sourceLoaded && activeSource === source) return true;

        activeSource = source;
        sourceLoaded = true;
        video.src = source;
        video.load();
        return true;
      };

      const playCurrent = (force = false) => {
        if (hasCompleted) return;
        if (!force && (reducedMotion.matches || saveData)) {
          setReplayVisibility(true, 'blocked');
          return;
        }
        if (!loadSource()) return;

        video.muted = true;
        video.defaultMuted = true;
        hasStarted = true;
        setReplayVisibility(false);
        video.play().catch(() => {
          setReplayVisibility(true, 'blocked');
        });
      };

      const updateVariant = () => {
        const nextSource = currentMediaUrl('src');
        const wasPlaying = !video.paused;
        const progress = video.duration > 0 ? video.currentTime / video.duration : 0;
        setPoster();

        if (!sourceLoaded || !nextSource || nextSource === activeSource) return;

        video.pause();
        activeSource = nextSource;
        video.src = nextSource;
        video.load();

        video.addEventListener(
          'loadedmetadata',
          () => {
            if (hasCompleted) {
              video.currentTime = Math.max(0, video.duration - 0.04);
              setReplayVisibility(true);
              return;
            }

            if (hasStarted && progress > 0) {
              video.currentTime = Math.min(video.duration * progress, Math.max(0, video.duration - 0.04));
            }
            if (wasPlaying && inView) playCurrent();
          },
          { once: true }
        );
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          if (inView) {
            playCurrent();
          } else if (!video.paused && !hasCompleted) {
            video.pause();
          }
        },
        { threshold: 0.25 }
      );

      replay.addEventListener('click', () => {
        if (!loadSource()) return;
        hasCompleted = false;
        hasStarted = true;
        video.currentTime = 0;
        playCurrent(true);
      });

      video.addEventListener('play', () => {
        hasStarted = true;
        setReplayVisibility(false);
      });

      video.addEventListener('ended', () => {
        hasCompleted = true;
        setReplayVisibility(true, 'replay');
      });

      video.addEventListener('error', () => {
        if (!hasCompleted) setReplayVisibility(true, 'blocked');
      });

      mobileViewport.addEventListener('change', updateVariant);
      reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) {
          video.pause();
          if (!hasCompleted) setReplayVisibility(true, 'blocked');
          return;
        }
        if (inView && !hasCompleted) playCurrent();
      });

      setPoster();
      setReplayVisibility(false);
      observer.observe(media);
    });
  };

  document.addEventListener('DOMContentLoaded', () => initMedia());
  document.addEventListener('shopify:section:load', (event) => initMedia(event.target));
})();
