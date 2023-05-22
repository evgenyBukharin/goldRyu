const main = document.querySelector(".main");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

if (main !== null && header !== null && nav !== null) {
	// main offset
	main.style.paddingTop = header.offsetHeight + "px";

	// nav animation
	let lastScroll = 0;
	const scrollPosition = () => window.pageYOffset;
	const containOpen = () => nav.classList.contains("nav-open");
	window.addEventListener("scroll", () => {
		if (scrollPosition() > lastScroll && containOpen()) {
			nav.classList.remove("nav-open");
			nav.style.maxHeight = null;
		} else if (scrollPosition() < lastScroll && !containOpen()) {
			nav.classList.add("nav-open");
			nav.style.maxHeight = nav.scrollHeight + "px";
		}
		lastScroll = scrollPosition();
	});
}
