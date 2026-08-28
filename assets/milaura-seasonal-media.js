(() => {
  const selector = '[data-milaura-seasonal-media]';

  const initMedia = (root = document) => {
    root.querySelectorAll(selector).forEach((media) => {
      if (media.dataset.mediaReady === 'true') return;
      media.dataset.mediaReady = 'true';

      const video = media.querySelector('[data-milaura-seasonal-video]');
      const toggle = media.querySelector('[data-milaura-seasonal-toggle]');
      const label = toggle?.querySelector('[data-milaura-seasonal-toggle-label]');
      if (!video || !toggle) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const mobileViewport = window.matchMedia('(max-width: 749px)');
      const saveData = navigator.connection?.saveData === true;
      let activeSource = '';
      let inView = false;
      let sourceLoaded = false;
      let userPaused = false;

      const currentVariant = () => (mobileViewport.matches ? 'Mobile' : 'Desktop');
      const currentMediaUrl = (kind) => {
        const variantUrl = video.dataset[`${kind}${currentVariant()}`];
        return variantUrl || video.dataset[`${kind}Desktop`] || '';
      };

      const setButtonState = () => {
        const paused = video.paused;
        toggle.setAttribute('aria-pressed', String(!paused));
        toggle.setAttribute('aria-label', paused ? 'Lire la vidéo' : 'Mettre la vidéo en pause');
        if (label) label.textContent = paused ? 'Lire' : 'Pause';
      };

      const setPoster = () => {
        const poster = currentMediaUrl('poster');
        if (poster && video.poster !== poster) video.poster = poster;
      };

      const loadSource = (force = false) => {
        if (!force && (reducedMotion.matches || saveData)) return false;

        const source = currentMediaUrl('src');
        if (!source) return false;
        if (sourceLoaded && activeSource === source) return true;

        activeSource = source;
        sourceLoaded = true;
        video.src = source;
        video.load();
        return true;
      };

      const playVideo = (force = false) => {
        if ((!force && (reducedMotion.matches || saveData)) || userPaused) return;
        if (!loadSource(force)) return;
        video.play().catch(() => setButtonState());
      };

      const updateVariant = () => {
        const wasPlaying = !video.paused && !userPaused;
        const nextSource = currentMediaUrl('src');
        setPoster();

        if (!sourceLoaded || !nextSource || nextSource === activeSource) return;

        video.pause();
        sourceLoaded = false;
        activeSource = '';
        loadSource(true);
        if (wasPlaying && inView && !reducedMotion.matches) {
          video.play().catch(() => setButtonState());
        }
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          if (inView) {
            playVideo();
          } else {
            video.pause();
          }
          setButtonState();
        },
        { rootMargin: '180px 0px', threshold: 0.25 }
      );

      toggle.addEventListener('click', () => {
        if (video.paused) {
          userPaused = false;
          playVideo(true);
        } else {
          userPaused = true;
          video.pause();
        }
        setButtonState();
      });

      video.addEventListener('play', setButtonState);
      video.addEventListener('pause', setButtonState);
      mobileViewport.addEventListener('change', updateVariant);
      reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) {
          video.pause();
        } else if (!userPaused && inView) {
          playVideo();
        }
        setButtonState();
      });

      setPoster();
      setButtonState();
      observer.observe(media);
    });
  };

  document.addEventListener('DOMContentLoaded', () => initMedia());
  document.addEventListener('shopify:section:load', (event) => initMedia(event.target));
})();
