import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-js="button-menu"]');
  const menuList = document.querySelector("#menu");
  const events = ["click", "touchstart"];

  if (menuButton && menuList) {
    function openMenu(event) {
      menuList.classList.add("ativo");
      menuButton.classList.add("ativo");
      outsideClick(menuList, events, () => {
        menuList.classList.remove("ativo");
        menuButton.classList.remove("ativo");
      });
    }

    events.forEach((itemEvent) => {
      menuButton.addEventListener(itemEvent, openMenu);
    });
  }
}
