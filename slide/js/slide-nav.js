import Slide from "./slide.js";

export default class SlideNav extends Slide {
  addArrow(previous, next) {
    this.previousElement = document.querySelector(previous);
    this.nextElement = document.querySelector(next);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.previousElement.addEventListener("click", this.activePreviousSlide);
    this.nextElement.addEventListener("click", this.activeNextSlide);
  }
}
