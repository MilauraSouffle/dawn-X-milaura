if (!customElements.get('milaura-rare-carousel')) {
  class MilauraRareCarousel extends HTMLElement {
    connectedCallback() {
      this.slides = Array.from(this.querySelectorAll('[data-rare-slide]'));
      this.dots = Array.from(this.querySelectorAll('[data-rare-dot]'));
      this.previousButton = this.querySelector('[data-rare-previous]');
      this.nextButton = this.querySelector('[data-rare-next]');
      this.toggleButton = this.querySelector('[data-rare-toggle]');
      this.stage = this.querySelector('.milaura-rare-carousel__stage');
      this.index = Math.max(0, this.slides.findIndex((slide) => slide.classList.contains('is-active')));
      this.interval = Number(this.dataset.interval) || 5000;
      this.autoplay = this.dataset.autoplay === 'true';
      this.motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.controller = new AbortController();
      this.timer = 0;
      this.pointerStart = null;
      this.userPaused = !this.autoplay;

      if (this.slides.length < 2) return;

      const options = { signal: this.controller.signal };

      this.previousButton?.addEventListener('click', () => this.show(this.index - 1, true), options);
      this.nextButton?.addEventListener('click', () => this.show(this.index + 1, true), options);
      this.toggleButton?.addEventListener('click', () => this.toggleAutoplay(), options);

      this.dots.forEach((dot) => {
        dot.addEventListener('click', () => this.show(Number(dot.dataset.rareDot), true), options);
      });

      this.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') this.show(this.index - 1, true);
        if (event.key === 'ArrowRight') this.show(this.index + 1, true);
      }, options);

      this.addEventListener('pointerdown', (event) => {
        if (event.pointerType === 'mouse') return;
        this.pointerStart = event.clientX;
      }, options);

      this.addEventListener('pointerup', (event) => {
        if (this.pointerStart === null || event.pointerType === 'mouse') return;
        const distance = event.clientX - this.pointerStart;
        this.pointerStart = null;
        if (Math.abs(distance) < 42) return;
        this.show(this.index + (distance < 0 ? 1 : -1), true);
      }, options);

      this.addEventListener('pointerenter', () => this.stop(), options);
      this.addEventListener('pointerleave', () => this.start(), options);
      this.addEventListener('focusin', () => this.stop(), options);
      this.addEventListener('focusout', (event) => {
        if (!this.contains(event.relatedTarget)) this.start();
      }, options);

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) this.stop();
        else this.start();
      }, options);

      this.motionQuery.addEventListener?.('change', () => {
        if (this.motionQuery.matches) this.stop();
        else this.start();
      }, options);

      this.observer = new IntersectionObserver(([entry]) => {
        this.isVisible = entry.isIntersecting;
        if (this.isVisible) this.start();
        else this.stop();
      }, { threshold: 0.35 });
      this.observer.observe(this);

      this.show(this.index, false);
      this.updateToggle();
    }

    disconnectedCallback() {
      this.stop();
      this.controller?.abort();
      this.observer?.disconnect();
    }

    show(requestedIndex, restartAutoplay) {
      const total = this.slides.length;
      this.index = (requestedIndex + total) % total;

      if (restartAutoplay) this.stop();

      this.slides.forEach((slide, slideIndex) => {
        const active = slideIndex === this.index;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
        slide.querySelectorAll('a, button').forEach((element) => {
          element.tabIndex = active ? 0 : -1;
        });
      });

      this.dots.forEach((dot, dotIndex) => {
        const active = dotIndex === this.index;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-current', active ? 'true' : 'false');
      });

      if (restartAutoplay && !this.userPaused) this.start(true);
    }

    toggleAutoplay() {
      if (this.userPaused) {
        this.userPaused = false;
        this.updateToggle();
        this.start(true);
      } else {
        this.userPaused = true;
        this.stop();
        this.updateToggle();
      }
    }

    updateToggle() {
      if (!this.toggleButton) return;
      this.toggleButton.dataset.paused = this.userPaused ? 'true' : 'false';
      this.toggleButton.setAttribute(
        'aria-label',
        this.userPaused ? 'Reprendre le carousel' : 'Mettre le carousel en pause'
      );
      if (this.stage) this.stage.setAttribute('aria-live', this.userPaused ? 'polite' : 'off');
    }

    start(explicit = false) {
      const focusInside = this.contains(document.activeElement);
      const pointerInside = this.matches(':hover');
      if (
        !this.autoplay ||
        this.userPaused ||
        this.motionQuery.matches ||
        document.hidden ||
        this.isVisible === false ||
        this.timer ||
        (!explicit && (focusInside || pointerInside))
      ) return;
      this.timer = window.setInterval(() => this.show(this.index + 1, false), this.interval);
    }

    stop() {
      if (!this.timer) return;
      window.clearInterval(this.timer);
      this.timer = 0;
    }
  }

  customElements.define('milaura-rare-carousel', MilauraRareCarousel);
}
