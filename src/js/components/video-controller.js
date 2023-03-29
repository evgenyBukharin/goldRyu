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
