const button = document.querySelector(".up-button__button");
if (button !== null) {
	button.addEventListener("click", () => {
		document.querySelector(".header").scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
}
