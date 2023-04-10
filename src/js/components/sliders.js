import Swiper, {
	Pagination,
	EffectCreative,
	Navigation,
	Thumbs,
	Manipulation,
	Autoplay,
} from "swiper";
Swiper.use([
	Pagination,
	EffectCreative,
	Navigation,
	Thumbs,
	Manipulation,
	Autoplay,
]);
const swiperHero = new Swiper(document.querySelector(".main-hero__slider"), {
	slidesPerView: "auto",
	spaceBetween: 40,
	resistanceRatio: 0,
	speed: 400,
	grabCursor: true,
	pagination: {
		el: ".main-hero__pagination",
		type: "progressbar",
	},
	breakpoints: {
		481: {
			enabled: true,
		},
		0: {
			enabled: false,
		},
	},
	loop: true,
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: true,
	},
});

const swiperFeedback = new Swiper(
	document.querySelector(".main-feedback__slider"),
	{
		slidesPerView: 3,
		spaceBetween: 30,
		speed: 400,
		resistanceRatio: 1,
		watchSlidesProgress: true,
		slideVisibleClass: "main-feedback__slide-visible",
		pagination: {
			el: ".main-feedback__pagination",
			type: "bullets",
			clickable: true,
			bulletClass: "main-feedback__bullet",
			bulletActiveClass: "main-feedback__bullet-active",
		},
		navigation: {
			nextEl: ".main-feedback__button-next",
			prevEl: ".main-feedback__button-prev",
		},
		breakpoints: {
			481: {
				enabled: true,
			},
			0: {
				slidesPerView: 1,
				enabled: false,
			},
		},
	}
);

const sliderThumbs = new Swiper(
	".catalog-item-hero__slider-thumbs .swiper-container",
	{
		slidesPerView: 3,
		direction: "vertical",
		navigation: {
			nextEl: ".catalog-item-hero__button-next",
			prevEl: ".catalog-item-hero__button-prev",
		},
		freeMode: true,
		breakpoints: {
			1025: {
				spaceBetween: 40,
			},
			481: {
				spaceBetween: 10,
				direction: "vertical",
			},
			0: {
				direction: "horizontal",
			},
		},
	}
);

const sliderImages = new Swiper(
	".catalog-item-hero__slider-images .swiper-container",
	{
		slidesPerView: 1,
		spaceBetween: 30,
		mousewheel: true,
		navigation: {
			nextEl: ".catalog-item-hero__button-next",
			prevEl: ".catalog-item-hero__button-prev",
		},
		grabCursor: true,
		thumbs: {
			swiper: sliderThumbs,
		},
		// breakpoints: {
		// 	0: {
		// 		direction: "horizontal",
		// 	},
		// 	768: {
		// 		direction: "vertical",
		// 	},
		// },
	}
);

const quizSlider = new Swiper(".quiz__slider", {
	slidesPerView: 1,
	speed: 500,
	allowSlideNext: false,
	allowSlidePrev: false,
});
const startTestBtn = document.getElementById("startTestBtn");
if (startTestBtn !== null) {
	startTestBtn.addEventListener("click", () => {
		quizSlider.allowSlideNext = true;
		quizSlider.slideNext();
		quizSlider.allowSlideNext = false;
	});
}
const quizInnerSlider = new Swiper(".quiz__slider-inner", {
	slidesPerView: 1,
	spaceBetween: 15,
	speed: 500,
	navigation: {
		nextEl: ".quiz__button-next",
		prevEl: ".quiz__button-prev",
	},
	pagination: {
		el: ".quiz__pagination",
		type: "progressbar",
	},
});

const quizInnerCurrent = document.querySelector(".quiz__title-current");
const quizInnerAll = document.querySelector(".quiz__title-all");
if (quizInnerAll !== null) {
	quizInnerAll.innerHTML = quizInnerSlider.slides.length;
}
quizInnerSlider.on("activeIndexChange", () => {
	quizInnerCurrent.innerHTML = quizInnerSlider.activeIndex + 1;
});
quizInnerSlider.on("reachEnd", () => {
	const nextBtn = document.querySelector(".quiz__button-next");
	setTimeout(() => {
		nextBtn.removeAttribute("disabled");
		nextBtn.addEventListener("click", () => {
			quizSlider.allowSlideNext = true;
			quizSlider.slideNext();
			quizSlider.allowSlideNext = false;
		});
	}, 0);
});

const designSlider = new Swiper(".main-design__slider", {
	slidesPerView: 1,
	speed: 500,
	allowSlideNext: false,
	allowSlidePrev: false,
});

// designSlider.activeIndex = 1;
const slideToHide = document.querySelector(".main-design__slide-tohide");
const designNextBtn = document.querySelector(".main-design__button-next");
if (designNextBtn !== null) {
	designNextBtn.addEventListener("click", (e) => {
		e.preventDefault();
		const designForm = document.querySelector(".main-design__form");
		const checkedInputs = designForm.querySelectorAll(
			".main-design__label-active .main-design__input"
		);
		const checkedInputImagePath = designForm
			.querySelector(".main-design__label-active .main-design__image")
			.getAttribute("src");

		if (checkedInputs !== null) {
			const formData = {
				img: checkedInputImagePath,
			};
			checkedInputs.forEach((input) => {
				formData[input.name] = input.value;
			});

			if (formData.color == "под заказ") {
				slideToHide.style.display = "none";
			}

			const importedImages = document.querySelectorAll(
				".main-degign__image-imported"
			);
			importedImages.forEach((importedImage) => {
				importedImage.setAttribute("src", formData.img);
			});

			const importedShapes = document.querySelectorAll(
				".main-design__text-shape"
			);
			importedShapes.forEach((importedShape) => {
				importedShape.innerHTML = `Форма: ${formData.shape}`;
			});

			const importedColors = document.querySelectorAll(
				".main-design__text-color"
			);
			importedColors.forEach((importedColor) => {
				importedColor.innerHTML = `Цвет: ${formData.color}`;
			});

			designSlider.allowSlideNext = true;
			designSlider.slideNext();
			designSlider.allowSlideNext = false;
		}
	});
}

const designPrevBtns = document.querySelectorAll(".main-design__button-prev");
if (designPrevBtns !== null) {
	designPrevBtns.forEach((designPrevBtn) => {
		designPrevBtn.addEventListener("click", () => {
			designSlider.allowSlidePrev = true;
			designSlider.slidePrev();
			designSlider.allowSlidePrev = false;
			slideToHide.style.display = "block";
		});
	});
}
