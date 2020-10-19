import debounce from "./debounce.js";

export default class Slide {
  constructor(slide, wrapper) {
    this.bindFunctionsCallbacks();
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
    this.activeClass = "active";
    this.init();
  }

  transition(active) {
    this.slide.style.transition = active ? "transform .3s" : "";
  }

  bindFunctionsCallbacks() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200);
    this.activePreviousSlide = this.activePreviousSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onMove(event) {
    const pointerPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onStart(event) {
    let moveType;
    if (event.type === "mousedown") {
      event.preventDefault();
      this.dist.startX = event.clientX;
      moveType = "mousemove";
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      moveType = "touchmove";
    }
    this.wrapper.addEventListener(moveType, this.onMove);
    this.transition(false);
  }

  onEnd(event) {
    this.transition(true);
    const moveType = event.type === "mouseup" ? "mousemove" : "touchmove";
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.changeSlideOnEnd();
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movement < -120 && this.index.previous !== undefined) {
      this.activePreviousSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  addResizeEvent() {
    window.addEventListener("resize", this.onResize);
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("touchstart", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchend", this.onEnd);
  }

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        position,
        element,
      };
    });
  }

  slidesIndexNav(index) {
    const slideArrayLength = this.slideArray.length;
    this.index = {
      previous: index ? index - 1 : undefined,
      active: index,
      next: index + 1 < slideArrayLength ? index + 1 : undefined,
    };
  }

  activePreviousSlide() {
    if (this.index.previous !== undefined) {
      this.changeSlide(this.index.previous);
    }
  }

  activeNextSlide() {
    if (this.index.next !== undefined) {
      this.changeSlide(this.index.next);
    }
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.removeActiveClassPreviousNext();
    this.changeActiveClass();
  }

  changeActiveClass() {
    this.slideArray[this.index.active].element.classList.add(this.activeClass);
  }

  removeActiveClassPreviousNext() {
    this.slideArray[this.index.previous]?.element.classList.remove(
      this.activeClass
    );
    this.slideArray[this.index.next]?.element.classList.remove(
      this.activeClass
    );
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 200);
  }

  init() {
    this.addSlideEvents();
    this.addResizeEvent();
    this.slidesConfig();
  }
}
