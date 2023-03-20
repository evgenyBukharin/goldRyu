const rows = document.querySelectorAll(".main-design__container-row");

rows.forEach((row) => {
	const labels = row.querySelectorAll(".main-design__label");
	labels.forEach((label) => {
		input = label.querySelector(".main-design__input");
		input.addEventListener("change", () => {
			labels.forEach((label) => {
				label.classList.remove("main-design__label-active");
			});
			label.classList.add("main-design__label-active");
		});
	});
});
