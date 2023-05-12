const searchSection = document.querySelector(".search");
const searchIcons = document.querySelectorAll(".search-icon");
const searchContent = document.querySelector(".search__content");
const burger = document.getElementById("burger");
const menuBg = document.querySelector(".menu__bg");
const body = document.querySelector("body");

if (searchIcons !== null && searchSection !== null && searchContent !== null) {
	searchIcons.forEach((icon) => {
		icon.addEventListener("click", () => {
			if (searchSection.classList.contains("search-visible")) {
				searchSection.classList.remove("search-visible");
				body.style.overflowY = "scroll";
				body.style.paddingRight = "0";
				header.style.paddingRight = "0";
			} else {
				if (burger !== null && menuBg !== null) {
					menuBg.classList.remove("menu__bg-active");
					burger.classList.remove("burger--active");
				}
				setTimeout(() => {
					body.style.overflowY = "hidden";
					body.style.paddingRight = "15px";
					header.style.paddingRight = "15px";
					searchSection.classList.add("search-visible");
				}, 300);
			}
		});
	});
	searchSection.addEventListener("click", () => {
		searchSection.classList.remove("search-visible");
		body.style.overflowY = "scroll";
		body.style.paddingRight = "0";
		header.style.paddingRight = "0";
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
