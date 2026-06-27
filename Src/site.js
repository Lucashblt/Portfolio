(function () {
  const PHOTOS = [
    "1 2026 50 ans fred.jpg",
    "2012 famille.jpg",
    "2014.jpg",
    "2015.jpg",
    "2016.jpg",
    "20190602_144610.jpg",
    "2020-12-09_160934.jpg",
    "2020-12-29_112651.jpg",
    "2020-12-29_114837.jpg",
    "2020-12-29_115350.jpg",
    "2020-12-29_115618.jpg",
    "20200303_130352.jpg",
    "20200627_170331.jpg",
    "20200628_120309.jpg",
    "20200711_135633.jpg",
    "2021-01-04_155501.jpg",
    "2021-01-05_155757.jpg",
    "2021-01-05_161116.jpg",
    "2021-01-05_161608.jpg",
    "2021-01-12_164115.jpg",
    "2021-01-12_170438.jpg",
    "2021-01-14_162746.jpg",
    "2021-01-15_114106.jpg",
    "2021-01-15_114351.jpg",
    "2021-01-20_105341.jpg",
    "2021-01-21_202505.jpg",
    "2021-03-01_164519.jpg",
    "2021-03-01_165005.jpg",
    "20220506_174206.jpg",
    "20220508_101443.jpg",
    "20220508_120005.jpg",
    "20230121_172225.jpg",
    "20230430_120940.jpg",
    "20231118_173656.jpg",
    "20250705_160018.jpg",
    "20260108_124730.jpg",
    "20260108_124747.jpg",
    "20260108_125001.jpg",
    "20260108_141150.jpg",
    "20260108_144754.jpg",
    "20260108_144903.jpg",
    "20260108_145029.jpg",
    "20260110_100615.jpg",
    "20260110_133513.jpg",
    "20260112_114849.jpg",
    "20260112_115201.jpg",
    "20260112_115307.jpg",
    "20260112_115706.jpg",
    "20260112_120114.jpg",
    "20260112_120703.jpg",
    "20260112_121050.jpg",
    "20260112_121202.jpg",
    "20260119_113937.jpg",
    "20260119_115516.jpg",
    "20260228_100120.jpg",
    "20260228_100440.jpg",
    "35 ans et 10 mariage.jpg",
    "37 ans les hommes.jpg",
    "43 ans.jpg",
    "6 ans.jpg",
    "fred 20 ans.jpg",
    "fred 98.jpg",
    "fred 99 médailles.jpg",
    "fred bébé.jpg",
    "fred crêpes.jpg",
    "IMG-20190928-WA0000.jpg",
    "IMG-20190930-WA0000.jpg",
    "IMG-20200502-WA0003.jpg",
    "IMG-20200912-WA0000.jpg",
    "IMG-20210328-WA0001.jpg",
    "IMG-20210328-WA0008.jpg",
    "IMG-20210401-WA0001.jpg",
    "IMG-20210424-WA0006.jpg",
    "IMG-20230420-WA0008.jpg",
    "IMG-20230728-WA0001.jpg",
    "IMG-20231119-WA0003.jpg",
    "IMG-20240429-WA0005.jpg",
    "IMG-20240430-WA0004.jpg",
    "IMG-20240501-WA0007.jpg",
    "IMG-20240821-WA0003.jpg",
    "IMG-20250223-WA0009.jpg",
    "IMG-20250621-WA0006.jpg",
    "IMG-20250621-WA0007.jpg",
    "IMG-20250803-WA0006.jpg",
    "IMG-20250806-WA0007.jpg",
    "IMG-20251226-WA0030.jpg",
    "IMG-20251226-WA0044.jpg",
    "IMG-20251228-WA0054.jpg",
    "IMG-20260412-WA0006.jpg",
    "IMG-20260530-WA0013.jpg",
    "IMG-20260530-WA0015.jpg",
    "IMG-20260606-WA0017.jpg",
    "IMG_0378.JPG",
    "IMG_0534.JPG",
    "IMG_0962.JPG",
    "IMG_1078.JPG",
    "IMG_1953.JPG",
    "IMG_2078.JPG",
    "IMG_2134.JPG",
    "IMG_2356.jpg",
    "IMG_3348.JPG",
    "IMG_4563.JPG",
    "IMG_4821.JPG",
    "IMG_7091.jpg",
    "IMG_9201.JPG",
    "nous 4 montagne1.jpg",
    "P1160763.JPG",
    "Photo_2022-01-19_103433.jpg",
    "Photo_2022-01-19_143858.jpg",
    "Photo_2022-01-22_103415.jpg",
    "Photo_2022-02-18_142757.jpg",
    "Photo_2022-02-18_150935.jpg",
    "Photo_2022-02-19_175259.jpg",
    "Photo_2022-11-14_153236.jpg",
    "Photo_2022-12-28_175928.jpg",
    "Photo_2023-02-16_151845.jpg",
    "Photo_2023-02-20_150614.jpg",
    "Photo_2023-02-20_151127.jpg",
    "Photo_2023-02-21_113351.jpg",
    "Screenshot_20260606_204232_Chrome.jpg",
    "WhatsApp Image 2026-06-14 at 20.06.46 (1).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.46 (2).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.46.jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (1).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (10).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (11).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (12).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (13).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (14).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (15).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (16).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (17).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (18).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (19).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (2).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (20).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (21).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (22).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (23).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (24).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (25).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (26).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (27).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (28).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (29).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (3).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (4).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (5).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (6).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (7).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (8).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47 (9).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.47.jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.48 (1).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.48 (10).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.48 (11).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.48 (2).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.48 (3).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.48 (4).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.48 (5).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.48 (6).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.48 (7).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.48 (8).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.48 (9).jpeg",
    "WhatsApp Image 2026-06-14 at 20.06.48.jpeg"
  ];

  const SLIDE_DELAY = 2000;

  const image = document.getElementById("slideshowImage");
  const fullscreenButton = document.getElementById("fullscreenButton");
  const pauseButton = document.getElementById("pauseButton");

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
