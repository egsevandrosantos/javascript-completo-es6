export default class Modal {
  constructor(btnAbrir, btnFechar, containerModal) {
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(containerModal);
    this.toggleModal = this.toggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
    this.addModalEvents();
  }

  addModalEvents() {
    this.btnAbrir?.addEventListener("click", this.toggleModal);
    this.btnFechar?.addEventListener("click", this.toggleModal);
    this.containerModal?.addEventListener("click", this.clickForaModal);
  }

  toggleModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle("ativo");
  }

  clickForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }
}
