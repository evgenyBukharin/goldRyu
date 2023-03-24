const changeLabels = document.querySelectorAll(".cabinet-hero__label-change");
changeLabels.forEach((label) => {
	label.addEventListener("click", () => {
		input = document.getElementById(label.getAttribute("for"));
		if (input.getAttribute("disabled") !== "disabled") {
			// async запрос на изменение данных на бэк??
			console.log(input.value);
			input.setAttribute("disabled", "disabled");
			label.classList.remove("cabinet-hero__label-change-active");
		} else {
			input.removeAttribute("disabled");
			label.classList.add("cabinet-hero__label-change-active");
		}
	});
});

const changeButtons = document.querySelectorAll(".cabinet-hero__button-change");

changeButtons.forEach((button) => {
	button.addEventListener("click", () => {
		currentSection = document.querySelector(".cabinet-hero__frame-visible");
		targetSection = document.getElementById(
			button.getAttribute("data-frame")
		);
		if (currentSection !== targetSection) {
			currentSection.classList.toggle("cabinet-hero__frame-visible");
			targetSection.classList.toggle("cabinet-hero__frame-visible");
		}
	});
});
