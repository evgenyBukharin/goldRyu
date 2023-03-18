import Swiper, { Pagination } from "swiper";
Swiper.use([Pagination]);
const swiper = new Swiper(document.querySelector(".swiper"), {
	slidesPerView: "auto",
});
