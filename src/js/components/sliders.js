import Swiper, { Pagination, EffectCreative, Navigation, Thumbs } from "swiper";
Swiper.use([Pagination, EffectCreative, Navigation, Thumbs]);
const swiperHero = new Swiper(document.querySelector(".main-hero__slider"), {
	slidesPerView: "auto",
	spaceBetween: 40,
	resistanceRatio: 0,
	speed: 400,
	effect: "creative",
	creativeEffect: {
		prev: {
			translate: [0, 0, -100],
		},
		next: {
			translate: ["100%", 0, 0],
		},
	},
	pagination: {
		el: ".main-hero__pagination",
		type: "progressbar",
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
	}
);

const sliderThumbs = new Swiper(
	".catalog-item-hero__slider-thumbs .swiper-container",
	{
		direction: "vertical",
		slidesPerView: 3,
		spaceBetween: 40,
		navigation: {
			nextEl: ".catalog-item-hero__button-next",
			prevEl: ".catalog-item-hero__button-prev",
		},
		freeMode: true,
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
	speed: 500,
	navigation: {
		nextEl: ".quiz__button-next",
		prevEl: ".quiz__button-prev",
	},
});
