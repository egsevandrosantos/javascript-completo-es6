const listaAnimais = document.querySelector(".animais-lista");

console.log(listaAnimais.scrollHeight);
console.log(listaAnimais.scrollWidth);
console.log(listaAnimais.offsetTop);
console.log(listaAnimais.offsetLeft);

const primeiroH2 = document.querySelector("h2");
console.log(primeiroH2.offsetTop, primeiroH2.offsetLeft);

const rect = primeiroH2.getBoundingClientRect();
console.log(rect);

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset,
  window.pageXOffset
);

const small = window.matchMedia("(max-width: 600px)");
console.log(small);

if (small.matches) {
  console.log("Usuário mobile");
} else {
  console.log("Usuário desktop");
}
