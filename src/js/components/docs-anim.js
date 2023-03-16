const items = document.querySelectorAll(".docs-hero__item");
let hiddenItem;
for (let i = 0; i < items.length; i++) {
	items[i].addEventListener("click", () => {
		if (items[i].classList.contains("docs-hero__item-active")) {
			items[i].classList.remove("docs-hero__item-active");
			if (
				window.screen.availWidth <= 768 &&
				window.screen.availWidth > 425
			) {
				hiddenItem.style.visibility = "visible";
			}
			if (window.screen.availWidth <= 425) {
				items.forEach((item) => {
					item.style.visibility = "visible";
				});
			}
		} else {
			items.forEach((item) => {
				item.classList.remove("docs-hero__item-active");
				item.style.visibility = "visible";
			});
			if (
				window.screen.availWidth <= 768 &&
				window.screen.availWidth > 425 &&
				i + 2 < items.length
			) {
				hiddenItem = items[i + 2];
				hiddenItem.style.visibility = "hidden";
			}
			if (window.screen.availWidth <= 425 && i + 1 !== items.length) {
				for (let j = i; j < items.length; j++) {
					console.log(i, j);
					if (j < items.length - 1) {
						items[j + 1].style.visibility = "hidden";
					}
				}
			}
			items[i].classList.add("docs-hero__item-active");
		}
	});
}
