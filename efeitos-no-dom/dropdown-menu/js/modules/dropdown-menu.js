export default function initDropdownMenu() {}

const dropdownMenus = document.querySelectorAll("[data-dropdown]");

dropdownMenus.forEach((item) => {
  // item.addEventListener("touchstart", handleClick);
  // item.addEventListener("click", handleClick);
  ["touchstart", "click"].forEach((itemEvent) =>
    item.addEventListener(itemEvent, handleClick)
  );
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("ativo");
}
