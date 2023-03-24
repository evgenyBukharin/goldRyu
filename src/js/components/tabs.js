export default class Tabs {
	constructor(selector, innerElems) {
		this.selector = selector;
		this.innerElements = innerElems;
		this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
		if (this.tabs) {
			this.tabList = this.tabs.querySelector("." + innerElems.list);
			this.tabsBtns = this.tabList.querySelectorAll(
				"." + innerElems.button
			);
			this.tabsPanels = this.tabs.querySelectorAll(
				"." + innerElems.panel
			);
		} else {
			return;
		}
		this.init();
		this.events();
	}
	init() {
		this.tabList.setAttribute("role", "tablist");
		this.tabsBtns.forEach((el, i) => {
			el.setAttribute("role", "tab");
			el.setAttribute("tabindex", "-1");
			el.setAttribute("id", `${this.selector}${i + 1}`);
			el.classList.remove(this.innerElements.button + "-active");
		});
		this.tabsPanels.forEach((el, i) => {
			el.setAttribute("role", "tabpanel");
			el.setAttribute("tabindex", "-1");
			el.setAttribute("aria-labelledby", this.tabsBtns[i].id);
			el.classList.remove(this.innerElements.panel + "-active");
		});
		this.tabsBtns[1].classList.add(this.innerElements.button + "-active");
		this.tabsBtns[1].removeAttribute("tabindex");
		this.tabsBtns[1].setAttribute("aria-selected", "true");
		this.tabsPanels[1].classList.add(this.innerElements.panel + "-active");
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
			this.innerElements.panel + "-active"
		);
		this.tabsPanels[index].classList.add(
			this.innerElements.panel + "-active"
		);
		this.tabsBtns[oldIndex].classList.remove(
			this.innerElements.button + "-active"
		);
		this.tabsBtns[index].classList.add(
			this.innerElements.button + "-active"
		);
	}
}

const catalogtabs = new Tabs("tab", {
	list: "catalog-item-tabs__list",
	button: "catalog-item-tabs__btn",
	panel: "catalog-item-tabs__panel",
});

const quizTabs = new Tabs("quizTab", {
	list: "quiz__list-tabs",
	button: "quiz__btn",
	panel: "quiz__panel",
});
