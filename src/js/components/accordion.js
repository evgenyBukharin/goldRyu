const accordions = document.querySelectorAll(".accordion");
accordions.forEach((el) => {
	el.addEventListener("click", (e) => {
		const self = e.currentTarget;
		const control = self.querySelector(".accordion__control");
		const content = self.querySelector(".accordion__content");
		const arrow = self.querySelector(".accordion__icon-arrow");

		self.classList.toggle("accordion-open");
		if (self.classList.contains("docs-hero__item")) {
			content.classList.toggle("accordion__content-open-docs");
		} else {
			content.classList.toggle("accordion__content-open");
		}

		arrow.classList.toggle("accordion__icon-arrow-reversed");

		if (self.classList.contains("accordion-open")) {
			control.setAttribute("aria-expanded", true);
			content.setAttribute("aria-hidden", false);
			content.style.maxHeight = content.scrollHeight + "px";
		} else {
			control.setAttribute("aria-expanded", false);
			content.setAttribute("aria-hidden", true);
			content.style.maxHeight = null;
		}
	});
});
