export default class TabNav {
  constructor(tabMenu, tabContent) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
    this.activeClass = "ativo";
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0); // Ativando a primeira tab
      this.addTabNavEvent();
    }
  }

  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index));
    });
  }

  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass);
  }
}
