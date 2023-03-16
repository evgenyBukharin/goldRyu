const accordions = document.querySelectorAll(".faq-hero__accordion");
accordions.forEach((el) => {
	el.addEventListener("click", (e) => {
		const self = e.currentTarget;
		const control = self.querySelector(".faq-hero__control");
		const content = self.querySelector(".faq-hero__content");
		const arrow = self.querySelector(".faq-hero__icon-arrow");

		self.classList.toggle("faq-hero__accrodion-open");
		content.classList.toggle("faq-hero__content-open");
		arrow.classList.toggle("faq-hero__icon-arrow-reversed");

		if (self.classList.contains("faq-hero__accrodion-open")) {
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
