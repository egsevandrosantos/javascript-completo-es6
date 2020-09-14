export default class AnimacaoScroll {
  constructor(sections) {
    this.animaScroll = this.animaScroll.bind(this);
    this.sections = document.querySelectorAll(sections);
    this.window60Perc = window.innerHeight * 0.6;
    if (this.sections.length) {
      this.animaScroll();
      window.addEventListener("scroll", this.animaScroll);
    }
  }

  animaScroll() {
    this.sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top - this.window60Perc;
      if (sectionTop <= 0) {
        item.classList.add("ativo");
      } else if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });
  }
}
