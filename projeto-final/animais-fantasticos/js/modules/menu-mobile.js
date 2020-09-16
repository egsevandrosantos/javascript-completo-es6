import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menu) {
    this.openMenu = this.openMenu.bind(this);
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menu);
    this.events = ["click", "touchstart"];
    if (this.menuButton && this.menuList) {
      this.events.forEach((itemEvent) => {
        this.menuButton.addEventListener(itemEvent, this.openMenu);
      });
    }
  }

  openMenu() {
    this.menuList.classList.add("ativo");
    this.menuButton.classList.add("ativo");
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove("ativo");
      this.menuButton.classList.remove("ativo");
    });
  }
}
