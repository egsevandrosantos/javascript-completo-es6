function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }
}

function initAccordionList() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
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

initTabNav();
initAccordionList();
initScrollSuave();
