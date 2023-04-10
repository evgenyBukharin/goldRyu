const searchSection = document.querySelector(".search");
const searchIcons = document.querySelectorAll(".search-icon");
const searchContent = document.querySelector(".search__content");
import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

if (searchIcons !== null && searchSection !== null && searchContent !== null) {
	searchIcons.forEach((icon) => {
		icon.addEventListener("click", () => {
			if (searchSection.classList.contains("search-visible")) {
				searchSection.classList.remove("search-visible");
				enableScroll();
			} else {
				searchSection.classList.add("search-visible");
				disableScroll();
			}
		});
	});
	searchSection.addEventListener("click", () => {
		searchSection.classList.remove("search-visible");
		enableScroll();
	});
	searchContent.addEventListener("click", (e) => {
		e.stopPropagation();
	});
}

const searchContainer = document.querySelector(".search__container");
const header = document.querySelector(".header");
if (searchContainer !== null && header !== null) {
	searchContainer.style.marginTop = header.offsetHeight + "px";
}
