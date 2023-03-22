const inputs = document.querySelectorAll(".catalog-hero__input");

inputs.forEach((input) => {
	input.addEventListener("change", () => {
		const boundedCategory = input.getAttribute("data-category");
		const boundCategoryElem = document.getElementById(boundedCategory);
		boundCategoryElem.classList.toggle(
			"catalog-hero__container-category-hidden"
		);
	});
});
