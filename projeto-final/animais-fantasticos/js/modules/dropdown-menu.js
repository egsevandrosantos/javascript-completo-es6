import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.criarFuncoesObj();
    this.dropdownMenus.forEach((item) => {
      // item.addEventListener("touchstart", handleClick);
      // item.addEventListener("click", handleClick);
      const events = ["touchstart", "click"];
      this.handleClick.events = events;
      events.forEach((itemEvent) =>
        item.addEventListener(itemEvent, this.handleClick)
      );
    });
  }

  criarFuncaoHandleClick() {
    this.handleClick = {
      events: null,
      element: null,
      handleEvent(event) {
        event.preventDefault();
        this.element = event.currentTarget;
        event.currentTarget.classList.add("ativo");
        outsideClick(event.currentTarget, this.events, () => {
          this.element.classList.remove("ativo");
        });
      },
    };
  }

  criarFuncoesObj() {
    this.criarFuncaoHandleClick();
  }
}
