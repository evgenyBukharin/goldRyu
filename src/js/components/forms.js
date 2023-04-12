const formSection = document.querySelector(".forms");
import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

if (formSection !== null) {
	const formsContainer = formSection.querySelector(".forms__container");
	const header = document.querySelector(".header");
	if (formsContainer !== null && header !== null) {
		formsContainer.style.marginTop = header.offsetHeight + "px";
	}
	formSection.addEventListener("click", () => {
		formSection.classList.remove("forms-visible");
		enableScroll();
	});

	const openFormsBtns = document.querySelectorAll(".open-form-btn");
	openFormsBtns.forEach((button) => {
		button.addEventListener("click", () => {
			if (!formSection.classList.contains("forms-visible")) {
				formSection.classList.add("forms-visible");
				disableScroll();
			}
		});
	});

	const closeBtns = formSection.querySelectorAll(".forms__button-close");
	closeBtns.forEach((button) => {
		button.addEventListener("click", () => {
			formSection.classList.remove("forms-visible");
			enableScroll();
		});
	});

	const formsContainersInner = formSection.querySelectorAll(
		".forms__container-inner"
	);
	formsContainersInner.forEach((container) => {
		container.addEventListener("click", (e) => {
			e.stopPropagation();
		});
	});

	const emailEnterButton = formSection.querySelector(".forms__item-email");
	const emailRegContainer = document.getElementById("emailRegContainer");
	emailEnterButton.addEventListener("click", () => {
		formsContainersInner.forEach((container) => {
			container.classList.add("forms__container-inner-hidden");
		});
		emailRegContainer.classList.remove("forms__container-inner-hidden");
	});

	const loginFormsBtns = formSection.querySelectorAll(".login-form-btn");
	const loginFormContainer = document.getElementById("loginFormContainer");
	loginFormsBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			formsContainersInner.forEach((container) => {
				container.classList.add("forms__container-inner-hidden");
			});
			loginFormContainer.classList.remove(
				"forms__container-inner-hidden"
			);
		});
	});

	const recoverFormsBtn = formSection.querySelector(".forms__button-recover");
	const recoverFormContainer = document.getElementById(
		"recoverFormContainer"
	);
	recoverFormsBtn.addEventListener("click", () => {
		formsContainersInner.forEach((container) => {
			container.classList.add("forms__container-inner-hidden");
		});
		recoverFormContainer.classList.remove("forms__container-inner-hidden");
	});

	const regFormsBtns = formSection.querySelectorAll(".forms__button-reg");
	regFormsBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			formsContainersInner.forEach((container) => {
				container.classList.add("forms__container-inner-hidden");
			});
			emailRegContainer.classList.remove("forms__container-inner-hidden");
		});
	});

	const mainFormBackBtns = document.querySelectorAll(".main-form-fack-btn");
	const mainFormContainer = document.getElementById("main-form-container");
	mainFormBackBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			formsContainersInner.forEach((container) => {
				container.classList.add("forms__container-inner-hidden");
			});
			mainFormContainer.classList.remove("forms__container-inner-hidden");
		});
	});
	const loginFormBackBtn = document.getElementById("login-form-back-btn");
	loginFormBackBtn.addEventListener("click", () => {
		formsContainersInner.forEach((container) => {
			container.classList.add("forms__container-inner-hidden");
		});
		loginFormContainer.classList.remove("forms__container-inner-hidden");
	});
}
