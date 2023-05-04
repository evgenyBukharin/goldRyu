const categories = document.querySelectorAll(
	".catalog-hero__container-visible .catalog-hero__container-image"
);
const hiddenContainer = document.querySelector(
	".catalog-hero__container-hidden"
);
const visibleContainer = document.querySelector(
	".catalog-hero__container-visible"
);

if (
	categories !== null &&
	hiddenContainer !== null &&
	visibleContainer !== null
) {
	categories.forEach((category) => {
		category.addEventListener("click", () => {
			const boundedCategory = category.getAttribute("data-category");
			const boundCategoryElem = document.getElementById(boundedCategory);
			const boundFilterInput = document.querySelector(
				`[data-category-filter="${boundedCategory}"]`
			);
			const boundFilterElem = boundFilterInput.closest(
				".catalog-hero__item"
			);
			boundFilterInput.setAttribute("checked", "checked");
			boundCategoryElem.classList.add(
				"catalog-hero__container-category-first"
			);
			hiddenContainer.classList.remove("catalog-hero__container-hidden");
			visibleContainer.classList.add("catalog-hero__container-hidden");
			boundFilterElem.style.order = "2";
			document.querySelector(".header").scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
			let categoryBlocks = document.querySelectorAll(
				".catalog-hero__container-category"
			);
		});
	});
}
