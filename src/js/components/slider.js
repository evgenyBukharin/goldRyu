import Swiper, { Pagination, EffectCreative } from "swiper";
Swiper.use([Pagination, EffectCreative]);
const swiper = new Swiper(document.querySelector(".swiper"), {
	slidesPerView: "auto",
	spaceBetween: 40,
	resistanceRatio: 0,
	speed: 400,
	effect: "creative",
	creativeEffect: {
		prev: {
			// will set `translateZ(-400px)` on previous slides
			translate: [0, 0, -100],
		},
		next: {
			// will set `translateX(100%)` on next slides
			translate: ["100%", 0, 0],
		},
	},
	pagination: {
		el: ".main-hero__pagination",
		type: "progressbar",
	},
});
