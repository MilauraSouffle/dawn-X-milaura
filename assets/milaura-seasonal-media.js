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
      const saveData = navigator.connection?.saveData === true;
      let userPaused = false;
      let sourceLoaded = false;

      const setButtonState = () => {
        const paused = video.paused;
        toggle.setAttribute('aria-pressed', String(paused));
        toggle.setAttribute('aria-label', paused ? 'Lire la vidéo' : 'Mettre la vidéo en pause');
        if (label) label.textContent = paused ? 'Lire' : 'Pause';
      };

      const loadSource = (force = false) => {
        if (sourceLoaded || (!force && (reducedMotion.matches || saveData))) return;
        const source = video.dataset.src;
        if (!source) return;
        sourceLoaded = true;
        video.src = source;
        video.load();
      };

      const playVideo = (force = false) => {
        if ((!force && (reducedMotion.matches || saveData)) || userPaused) return;
        loadSource(force);
        video.play().catch(() => setButtonState());
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
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
      reducedMotion.addEventListener('change', () => {
        if (reducedMotion.matches) {
          video.pause();
        } else if (!userPaused) {
          playVideo();
        }
        setButtonState();
      });

      setButtonState();
      observer.observe(media);
    });
  };

  document.addEventListener('DOMContentLoaded', () => initMedia());
  document.addEventListener('shopify:section:load', (event) => initMedia(event.target));
})();
