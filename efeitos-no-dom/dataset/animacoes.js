function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-js="tabmenu"] li');
  const tabContent = document.querySelectorAll(
    '[data-js="tabcontent"] section'
  );

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}

function initAccordionList() {
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

function initScrollSuave() {
  const linksInternos = document.querySelectorAll("a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const target = event.target;
    const href = target.getAttribute("href");
    const section = document.querySelector(href);
    // window.scrollTo(0, section.offsetTop);
    // window.scrollTo({
    //   top: section.offsetTop,
    //   behavior: "smooth",
    // });
    // section.scrollIntoView();
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}

function initAnimacaoScroll() {
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

initTabNav();
initAccordionList();
initScrollSuave();
initAnimacaoScroll();
