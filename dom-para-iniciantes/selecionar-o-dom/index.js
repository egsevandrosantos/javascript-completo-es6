const animais = document.getElementById("animais");
console.log(animais);

const naoExiste = document.getElementById("aniamis");
console.log(naoExiste);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const primeiroLinkInterno = document.querySelector('[href^="#"]');
console.log(primeiroLinkInterno);

const imgAnimais = document.querySelectorAll(".animais img");
console.log(imgAnimais);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");
console.log(gridSectionHTML, gridSectionNode);
primeiraUl.classList.add("grid-section");
console.log(gridSectionHTML, gridSectionNode);

gridSectionNode.forEach(function (item, index) {
  console.log(item, index);
});

const arrayGridSectionHTML = Array.from(gridSectionHTML);
arrayGridSectionHTML.forEach(function (item, index) {
  console.log(item, index);
});
