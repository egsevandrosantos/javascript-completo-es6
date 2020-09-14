export default class AnimacaoScroll {
  constructor(sections) {
    this.checkDistance = this.checkDistance.bind(this);
    this.sections = document.querySelectorAll(sections);
    this.window60Perc = window.innerHeight * 0.6;
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
  }

  getDistance() {
    this.distance = [...this.sections].map((item) => {
      const { offsetTop } = item;
      return {
        element: item,
        offsetTop,
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.element.offsetTop - this.window60Perc) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }
}
