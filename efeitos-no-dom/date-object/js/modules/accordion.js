export default function initAccordionList() {
  const accordionList = document.querySelectorAll('[data-js="accordion"] dt');
  if (accordionList.length) {
    const ativoClass = "ativo";
    accordionList[0].classList.toggle(ativoClass);
    accordionList[0].nextElementSibling.classList.toggle(ativoClass);

    function activeAccordion(element) {
      this.classList.toggle(ativoClass);
      this.nextElementSibling.classList.toggle(ativoClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
