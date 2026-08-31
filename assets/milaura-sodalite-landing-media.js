(() => {
  const selector = '[data-milaura-sodalite-landing-media]';

  const initMedia = (root = document) => {
    root.querySelectorAll(selector).forEach((media) => {
      if (media.dataset.landingMediaReady === 'true') return;
      media.dataset.landingMediaReady = 'true';

      const video = media.querySelector('[data-milaura-sodalite-landing-video]');
      const toggle = media.querySelector('[data-milaura-sodalite-landing-toggle]');
      const label = toggle?.querySelector('[data-milaura-sodalite-landing-toggle-label]');
      if (!video || !toggle || !label) return;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const mobileViewport = window.matchMedia('(max-width: 749px)');
      const saveData = navigator.connection?.saveData === true;
      let activeSource = '';
      let sourceLoaded = false;
      let inView = false;
      let userPaused = false;

      const currentVariant = () => (mobileViewport.matches ? 'Mobile' : 'Desktop');
      const currentMediaUrl = (kind) => {
        const variantUrl = video.dataset[`${kind}${currentVariant()}`];
        return variantUrl || video.dataset[`${kind}Desktop`] || '';
      };

      const setToggleState = () => {
        const paused = video.paused;
        media.dataset.mediaState = paused ? 'paused' : 'playing';
        toggle.setAttribute('aria-pressed', String(!paused));
        toggle.setAttribute('aria-label', paused ? 'Lire la vidéo' : 'Mettre la vidéo en pause');
        label.textContent = paused ? 'Lire' : 'Pause';
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

        video.play().catch(setToggleState);
      };

      const updateVariant = () => {
        const nextSource = currentMediaUrl('src');
        const wasPlaying = !video.paused && !userPaused;
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
            if (progress > 0) video.currentTime = Math.min(video.duration * progress, video.duration - 0.04);
            if (wasPlaying && inView) playVideo(true);
          },
          { once: true }
        );
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
          if (inView) {
            playVideo();
          } else if (!video.paused) {
            video.pause();
          }
          setToggleState();
        },
        { threshold: 0.25 }
      );

      toggle.addEventListener('click', () => {
        if (video.paused) {
          userPaused = false;
          playVideo(true);
        } else {
          userPaused = true;
          video.pause();
        }
        setToggleState();
      });

      video.addEventListener('play', setToggleState);
      video.addEventListener('pause', setToggleState);
      mobileViewport.addEventListener('change', updateVariant);
      reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) {
          video.pause();
        } else if (!userPaused && inView) {
          playVideo();
        }
        setToggleState();
      });

      setPoster();
      setToggleState();
      observer.observe(media);
    });
  };

  document.addEventListener('DOMContentLoaded', () => initMedia());
  document.addEventListener('shopify:section:load', (event) => initMedia(event.target));
})();
