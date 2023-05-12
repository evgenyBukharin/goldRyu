const searchSection = document.querySelector(".search");
const searchIcons = document.querySelectorAll(".search-icon");
const searchContent = document.querySelector(".search__content");
const burger = document.getElementById("burger");
const menuBg = document.querySelector(".menu__bg");
const body = document.querySelector("body");

import { mobileCheck } from "../functions/mobile-check";

if (searchIcons !== null && searchSection !== null && searchContent !== null) {
	searchIcons.forEach((icon) => {
		icon.addEventListener("click", () => {
			if (searchSection.classList.contains("search-visible")) {
				if (mobileCheck() == "unknown") {
					body.style.paddingRight = "0";
					header.style.paddingRight = "0";
				}
				body.style.overflowY = "scroll";
				searchSection.classList.remove("search-visible");
			} else {
				if (burger !== null && menuBg !== null) {
					menuBg.classList.remove("menu__bg-active");
					burger.classList.remove("burger--active");
				}
				setTimeout(() => {
					if (mobileCheck() == "unknown") {
						body.style.paddingRight = "15px";
						header.style.paddingRight = "15px";
					}
					body.style.overflowY = "hidden";
					searchSection.classList.add("search-visible");
				}, 300);
			}
		});
	});
	searchSection.addEventListener("click", () => {
		if (mobileCheck() == "unknown") {
			body.style.paddingRight = "0";
			header.style.paddingRight = "0";
		}
		body.style.overflowY = "scroll";
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
