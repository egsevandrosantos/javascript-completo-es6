import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-js="button-menu"]');
  const menuList = document.querySelector("#menu");
  const events = ["click", "touchstart"];

  function openMenu() {
    menuList.classList.add("ativo");
    menuButton.classList.add("ativo");
    outsideClick(menuList, events, () => {
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
    });
  }

  if (menuButton && menuList) {
    events.forEach((itemEvent) => {
      menuButton.addEventListener(itemEvent, openMenu);
    });
  }
}
