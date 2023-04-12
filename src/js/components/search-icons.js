const searchSection = document.querySelector(".search");
const searchIcons = document.querySelectorAll(".search-icon");
const searchContent = document.querySelector(".search__content");
const burger = document.getElementById("burger");
const menuBg = document.querySelector(".menu__bg");

if (searchIcons !== null && searchSection !== null && searchContent !== null) {
	searchIcons.forEach((icon) => {
		icon.addEventListener("click", () => {
			if (searchSection.classList.contains("search-visible")) {
				searchSection.classList.remove("search-visible");
			} else {
				if (burger !== null && menuBg !== null) {
					menuBg.classList.remove("menu__bg-active");
					burger.classList.remove("burger--active");
				}
				setTimeout(() => {
					searchSection.classList.add("search-visible");
				}, 300);
			}
		});
	});
	searchSection.addEventListener("click", () => {
		searchSection.classList.remove("search-visible");
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
