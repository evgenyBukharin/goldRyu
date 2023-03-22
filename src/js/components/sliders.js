import Swiper, { Pagination, EffectCreative, Navigation } from "swiper";
Swiper.use([Pagination, EffectCreative, Navigation]);
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
