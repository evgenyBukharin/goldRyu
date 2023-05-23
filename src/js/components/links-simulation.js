const linkItems = document.querySelectorAll("[data-href]");
if (linkItems !== null) {
	linkItems.forEach((link) => {
		link.addEventListener("click", () => {
			const href = link.getAttribute("data-href");
			document.location.href = href;
		});
	});
}
