export default function initAccordionList() {
  const accordionList = document.querySelectorAll('[data-js="accordion"] dt');
  const ativoClass = "ativo";

  function activeAccordion() {
    this.classList.toggle(ativoClass);
    this.nextElementSibling.classList.toggle(ativoClass);
  }

  if (accordionList.length) {
    accordionList[0].classList.toggle(ativoClass);
    accordionList[0].nextElementSibling.classList.toggle(ativoClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
