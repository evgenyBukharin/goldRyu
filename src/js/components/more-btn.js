const moreBtn = document.querySelector(".main-feedback__button-more");
const feedbackSlides = document.querySelectorAll(".main-feedback__slide");
if (moreBtn !== null) {
	moreBtn.addEventListener("click", () => {
		feedbackSlides.forEach((slide) => {
			slide.classList.add("main-feedback__slide-visible-480");
		});
		moreBtn.style.display = "none";
	});
}
