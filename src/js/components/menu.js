const burger = document.getElementById("burger");
const menuBg = document.querySelector(".menu__bg");

if (burger !== null && menuBg !== null) {
	burger.addEventListener("click", () => {
		menuBg.classList.toggle("menu__bg-active");
		burger.classList.toggle("burger--active");
	});
}
