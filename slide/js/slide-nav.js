import Slide from "./slide.js";

export default class SlideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper);
    this.bindFunctionsCallbacks();
  }

  bindFunctionsCallbacks() {
    this.activeControlItem = this.activeControlItem.bind(this);
    this.removeActiveControlItem = this.removeActiveControlItem.bind(this);
    this.createEventControl = this.createEventControl.bind(this);
    super.bindFunctionsCallbacks();
  }

  addArrow(previous, next) {
    this.previousElement = document.querySelector(previous);
    this.nextElement = document.querySelector(next);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.previousElement.addEventListener("click", this.activePreviousSlide);
    this.nextElement.addEventListener("click", this.activeNextSlide);
  }

  createControl() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";
    this.slideArray.forEach((_, index) => {
      control.innerHTML += `
        <li>
          <a href="#slide${index + 1}">${index + 1}</a>
        </li>
      `;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  activeControlItem() {
    this.controlArray[this.index.active].classList.add(this.activeClass);
  }

  removeActiveControlItem() {
    this.controlArray.forEach((item) =>
      item.classList.remove(this.activeClass)
    );
  }

  createEventControl(item, index) {
    item.addEventListener("click", (ev) => {
      ev.preventDefault();
      this.removeActiveControlItem();
      this.changeSlide(index);
      this.activeControlItem();
    });
    this.wrapper.addEventListener("changeEvent", () => {
      this.removeActiveControlItem();
      this.activeControlItem();
    });
  }

  addControl(customControl) {
    this.control =
      document.querySelector(customControl) || this.createControl();
    this.controlArray = [...this.control.children];
    this.controlArray.forEach(this.createEventControl);
    this.activeControlItem();
  }
}
