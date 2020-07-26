// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu ul li");
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});
console.log(itensMenu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item, index) => {
  if (index > 0) {
    item.classList.remove("ativo");
  }
});
console.log(itensMenu);
// itensMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((item) => {
  console.log(item, item.hasAttribute("alt") ? "tem" : "não tem");
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('.menu ul li a[href^="http"]');
console.log(linkExterno);
console.log(linkExterno.getAttribute("href"));
linkExterno.setAttribute("href", "https://");
console.log(linkExterno.getAttribute("href"));
