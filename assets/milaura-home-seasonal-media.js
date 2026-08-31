(() => {
  const selector = '[data-milaura-home-seasonal-media]';

  const initMedia = (root = document) => {
    root.querySelectorAll(selector).forEach((media) => {
      if (media.dataset.homeMediaReady === 'true') return;
      media.dataset.homeMediaReady = 'true';

      const video = media.querySelector('[data-milaura-home-seasonal-video]');
      const replay = media.querySelector('[data-milaura-home-seasonal-replay]');
      if (!video || !replay) return;

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

      const setReplayVisibility = (visible) => {
        replay.hidden = !visible;
        media.dataset.mediaState = visible ? 'ended' : hasStarted ? 'playing' : 'idle';
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

      const playCurrent = () => {
        if (hasCompleted || reducedMotion.matches || saveData) return;
        if (!loadSource()) return;

        hasStarted = true;
        setReplayVisibility(false);
        video.play().catch(() => {
          media.dataset.mediaState = 'blocked';
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
        setReplayVisibility(false);
        video.play().catch(() => {
          media.dataset.mediaState = 'blocked';
        });
      });

      video.addEventListener('ended', () => {
        hasCompleted = true;
        setReplayVisibility(true);
      });

      mobileViewport.addEventListener('change', updateVariant);
      reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) {
          video.pause();
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
