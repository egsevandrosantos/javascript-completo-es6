// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector("img");
console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgs = document.querySelectorAll("img");
  let widthImgs = 0;
  imgs.forEach((item, index) => {
    console.log(index, item.offsetWidth);
    widthImgs += item.offsetWidth;
  });
  console.log(widthImgs);
}

window.onload = function () {
  this.somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");
links.forEach((item) => {
  if (item.offsetWidth >= 48 && item.offsetHeight >= 48) {
    console.log(item, "recomendado");
  } else {
    console.log(item, "não recomendado");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const match720 = window.matchMedia("(max-width: 719px)");
if (match720.matches) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
