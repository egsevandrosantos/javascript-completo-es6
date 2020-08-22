export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-js="scroll"]');
  if (sections.length) {
    const window60Perc = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top - window60Perc;
        if (sectionTop <= 0) {
          item.classList.add("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
