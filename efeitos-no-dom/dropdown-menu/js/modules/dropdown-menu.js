import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  const handleClick = {
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

  dropdownMenus.forEach((item) => {
    // item.addEventListener("touchstart", handleClick);
    // item.addEventListener("click", handleClick);
    const events = ["touchstart", "click"];
    handleClick.events = events;
    events.forEach((itemEvent) =>
      item.addEventListener(itemEvent, handleClick)
    );
  });
}
