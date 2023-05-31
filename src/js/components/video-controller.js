const videoContainers = document.querySelectorAll(
	".main-feedback__container-video"
);
videoContainers.forEach((container) => {
	const video = container.querySelector(".main-feedback__video");
	let counter = 0;

	const fullScreenButton = container.querySelector(
		".main-feedback__button-fullscreen"
	);
	if (fullScreenButton !== null) {
		fullScreenButton.addEventListener("click", (event) => {
			event.stopPropagation();
			if (video.requestFullscreen) {
				video.requestFullscreen();
			} else if (video.mozRequestFullScreen) {
				video.mozRequestFullScreen();
			} else if (video.webkitRequestFullscreen) {
				video.webkitRequestFullscreen();
			}
		});
	}
	video.addEventListener("fullscreenchange", () => {
		counter++;
		if (counter > 1) {
			counter = 0;
			video.load();
			container.classList.remove("main-feedback__container-video-active");
		}
	});
	container.addEventListener("click", () => {
		if (
			container.classList.contains(
				"main-feedback__container-video-active"
			)
		) {
			container.classList.remove("main-feedback__container-video-active");
			video.pause();
			if (counter == 0) {
				video.load();
			}
		} else {
			video.play();
			container.classList.add("main-feedback__container-video-active");
		}
	});
});

const mediaQuery390 = window.matchMedia("(max-width: 390px)");
const mediaQuery480 = window.matchMedia("(max-width: 480px)");
const mediaQuery768 = window.matchMedia("(max-width: 768px)");
const mediaQuery1024 = window.matchMedia("(max-width: 1024px)");
const mediaQuery1920 = window.matchMedia("(max-width: 1920px)");

alert(
	`Ширина окна: ${window.innerWidth}px,
	\nМедиа запрос 390: ${mediaQuery390.matches},
	\nМедиа запрос 480: ${mediaQuery480.matches},
	\nМедиа запрос 768: ${mediaQuery768.matches},
	\nМедиа запрос 1024: ${mediaQuery1024.matches},
	\nМедиа запрос 1920: ${mediaQuery1920.matches}`
);
