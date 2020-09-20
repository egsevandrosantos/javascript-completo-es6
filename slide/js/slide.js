export default class Slide {
  constructor(slide, wrapper) {
    this.bindFunctionsCallbacks();
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.init();
  }

  bindFunctionsCallbacks() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  onMove(event) {}

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  onEnd(event) {
    this.wrapper.removeEventListener("mousemove", this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  init() {
    this.addSlideEvents();
  }
}
