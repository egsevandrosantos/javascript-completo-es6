export default function initScrollSuave() {
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
