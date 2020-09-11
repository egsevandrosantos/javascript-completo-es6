export default class ScrollSuave {
  constructor(links, options = { behavior: "smooth", block: "start" }) {
    this.linksInternos = document.querySelectorAll(links);
    this.options = options;
    this.scrollToSection = this.scrollToSection.bind(this); // Bind faz o this dela sempre ser a classe, pois quando usa como callback sem o bind o this muda
    if (this.linksInternos) {
      this.addLinkEvent();
    }
  }

  scrollToSection(event) {
    event.preventDefault();
    const { target } = event;
    const href = target.getAttribute("href");
    const section = document.querySelector(href);
    // window.scrollTo(0, section.offsetTop);
    // window.scrollTo({
    //   top: section.offsetTop,
    //   behavior: "smooth",
    // });
    // section.scrollIntoView();
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((item) => {
      // item.addEventListener("click", this.scrollToSection); // This vira o link
      // item.addEventListener("click", (event) => this.scrollToSection(event)); // This é a classe mas não consigo remover o eventListener pois é função anonima
      item.addEventListener("click", this.scrollToSection); // Agora o this funciona normal pois usamos o bind para forçar que o this sempre seja a classe e agora podemos remover o eventListener
    });
  }
}
