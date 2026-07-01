(function () {
  const PHOTOS = window.__SLIDESHOW_PHOTOS__ || [];

  const SLIDE_DELAY = 2000;

  const image = document.getElementById("slideshowImage");
  const fullscreenButton = document.getElementById("fullscreenButton");
  const pauseButton = document.getElementById("pauseButton");
  const photoCounter = document.getElementById("photoCounter");

  const state = {
    index: 0,
    paused: false,
    timerId: null,
  };

  function photoUrl(fileName) {
    return encodeURI(`Src/${fileName}`);
  }

  function render() {
    if (!image || PHOTOS.length === 0) {
      return;
    }

    const currentPhoto = PHOTOS[state.index];
    image.src = photoUrl(currentPhoto);
    image.alt = `Photo ${state.index + 1} sur ${PHOTOS.length}`;

    if (photoCounter) {
      photoCounter.textContent = `${state.index + 1} / ${PHOTOS.length}`;
    }
  }

  function stopTimer() {
    if (state.timerId !== null) {
      window.clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function startTimer() {
    stopTimer();

    if (PHOTOS.length <= 1 || state.paused) {
      return;
    }

    state.timerId = window.setInterval(() => {
      state.index = (state.index + 1) % PHOTOS.length;
      render();
    }, SLIDE_DELAY);
  }

  function setPaused(paused) {
    state.paused = paused;
    if (pauseButton) {
      pauseButton.textContent = paused ? "Reprendre" : "Pause";
      pauseButton.setAttribute("aria-pressed", String(paused));
    }

    if (paused) {
      stopTimer();
    } else {
      startTimer();
    }
  }

  function updateFullscreenButton() {
    if (!fullscreenButton) {
      return;
    }

    const isFullscreen = Boolean(document.fullscreenElement);
    fullscreenButton.textContent = isFullscreen ? "Quitter le plein écran" : "Plein écran";
  }

  function nextPhoto(step) {
    if (PHOTOS.length === 0) {
      return;
    }

    state.index = (state.index + step + PHOTOS.length) % PHOTOS.length;
    render();
  }

  function togglePause() {
    setPaused(!state.paused);
  }

  async function toggleFullscreen() {
    if (document.fullscreenElement) {
      await exitFullscreen();
      updateFullscreenButton();
      return;
    }

    await tryFullscreen();
    updateFullscreenButton();
  }

  async function tryFullscreen() {
    if (document.fullscreenElement || !document.documentElement.requestFullscreen) {
      return;
    }

    try {
      await document.documentElement.requestFullscreen();
    } catch {
      // Browsers may block fullscreen until a user gesture.
    }
  }

  async function exitFullscreen() {
    if (!document.fullscreenElement || !document.exitFullscreen) {
      return;
    }

    try {
      await document.exitFullscreen();
    } catch {
      // Some browsers may ignore exit requests in restricted contexts.
    }
  }

  function init() {
    if (!image || !pauseButton || !fullscreenButton || PHOTOS.length === 0) {
      return;
    }

    render();
    setPaused(false);
    updateFullscreenButton();
    tryFullscreen();

    fullscreenButton.addEventListener("click", () => {
      toggleFullscreen();
    });

    pauseButton.addEventListener("click", () => {
      togglePause();
      tryFullscreen();
    });

    document.addEventListener("click", () => {
      tryFullscreen();
    }, { once: true });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        exitFullscreen();
        updateFullscreenButton();
        return;
      }

      if (event.code === "Space" || event.key === " ") {
        event.preventDefault();
        togglePause();
        tryFullscreen();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        nextPhoto(-1);
        tryFullscreen();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextPhoto(1);
        tryFullscreen();
      }
    });

    window.addEventListener("mousedown", tryFullscreen, { once: true });
    window.addEventListener("touchstart", tryFullscreen, { once: true, passive: true });

    document.addEventListener("fullscreenchange", updateFullscreenButton);
  }

  window.addEventListener("load", init);
})();

