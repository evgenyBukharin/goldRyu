export default class Tabs {
	constructor(selector, options) {
		let defaultOptions = {
			isChanged: () => {},
		};
		this.options = Object.assign(defaultOptions, options);
		this.selector = selector;
		this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
		if (this.tabs) {
			this.tabList = this.tabs.querySelector(".catalog-item-tabs__list");
			this.tabsBtns = this.tabList.querySelectorAll(
				".catalog-item-tabs__btn"
			);
			this.tabsPanels = this.tabs.querySelectorAll(
				".catalog-item-tabs__panel"
			);
		} else {
			console.error("Селектор data-tabs не существует!");
			return;
		}

		this.check();
		this.init();
		this.events();
	}

	check() {
		if (
			document.querySelectorAll(`[data-tabs="${this.selector}"]`).length >
			1
		) {
			console.error(
				"Количество элементов с одинаковым data-tabs больше одного!"
			);
			return;
		}

		if (this.tabsBtns.length !== this.tabsPanels.length) {
			console.error("Количество кнопок и элементов табов не совпадает!");
			return;
		}
	}

	init() {
		this.tabList.setAttribute("role", "tablist");

		this.tabsBtns.forEach((el, i) => {
			el.setAttribute("role", "tab");
			el.setAttribute("tabindex", "-1");
			el.setAttribute("id", `${this.selector}${i + 1}`);
			el.classList.remove("catalog-item-tabs__btn-active");
		});

		this.tabsPanels.forEach((el, i) => {
			el.setAttribute("role", "tabpanel");
			el.setAttribute("tabindex", "-1");
			el.setAttribute("aria-labelledby", this.tabsBtns[i].id);
			el.classList.remove("catalog-item-tabs__panel-active");
		});

		this.tabsBtns[1].classList.add("catalog-item-tabs__btn-active");
		this.tabsBtns[1].removeAttribute("tabindex");
		this.tabsBtns[1].setAttribute("aria-selected", "true");
		this.tabsPanels[1].classList.add("catalog-item-tabs__panel-active");
	}

	events() {
		this.tabsBtns.forEach((el, i) => {
			el.addEventListener("click", (e) => {
				let currentTab = this.tabList.querySelector("[aria-selected]");

				if (e.currentTarget !== currentTab) {
					this.switchTabs(e.currentTarget, currentTab);
				}
			});

			el.addEventListener("keydown", (e) => {
				let index = Array.prototype.indexOf.call(
					this.tabsBtns,
					e.currentTarget
				);

				let dir = null;

				if (e.which === 37) {
					dir = index - 1;
				} else if (e.which === 39) {
					dir = index + 1;
				} else if (e.which === 40) {
					dir = "down";
				} else {
					dir = null;
				}

				if (dir !== null) {
					if (dir === "down") {
						this.tabsPanels[i].focus();
					} else if (this.tabsBtns[dir]) {
						this.switchTabs(this.tabsBtns[dir], e.currentTarget);
					}
				}
			});
		});
	}

	switchTabs(newTab, oldTab = this.tabs.querySelector("[aria-selected]")) {
		newTab.focus();
		newTab.removeAttribute("tabindex");
		newTab.setAttribute("aria-selected", "true");

		oldTab.removeAttribute("aria-selected");
		oldTab.setAttribute("tabindex", "-1");

		let index = Array.prototype.indexOf.call(this.tabsBtns, newTab);
		let oldIndex = Array.prototype.indexOf.call(this.tabsBtns, oldTab);

		this.tabsPanels[oldIndex].classList.remove(
			"catalog-item-tabs__panel-active"
		);
		this.tabsPanels[index].classList.add("catalog-item-tabs__panel-active");

		this.tabsBtns[oldIndex].classList.remove(
			"catalog-item-tabs__btn-active"
		);
		this.tabsBtns[index].classList.add("catalog-item-tabs__btn-active");

		this.options.isChanged(this);
	}
}

const tabs = new Tabs("tab");
