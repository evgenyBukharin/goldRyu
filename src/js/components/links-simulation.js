const linkItems = document.querySelectorAll("[data-href]");
if (linkItems !== null) {
	linkItems.forEach((link) => {
		const innerButtons = link.querySelectorAll("button");

		innerButtons.forEach((btn) => {
			btn.addEventListener("click", (event) => {
				event.stopPropagation();
			});
		});

		link.addEventListener("click", () => {
			const href = link.getAttribute("data-href");
			document.location.href = href;
		});
	});
}
