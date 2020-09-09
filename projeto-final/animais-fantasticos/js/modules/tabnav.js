export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-js="tabmenu"] li');
  const tabContent = document.querySelectorAll(
    '[data-js="tabcontent"] section'
  );

  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
