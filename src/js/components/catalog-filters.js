const inputs = document.querySelectorAll(".catalog-hero__input");
const boundCategoryElems = document.querySelectorAll(
	".catalog-hero__container-category"
);

if (inputs !== null && boundCategoryElems !== null) {
	inputs.forEach((input) => {
		input.addEventListener("click", () => {
			const boundedCategory = input.getAttribute("data-category-filter");
			const boundCategoryElem = document.getElementById(boundedCategory);
			boundCategoryElems.forEach((elem) => {
				elem.style.order = "2";
			});
			boundCategoryElem.style.order = "1";
		});
	});
}
