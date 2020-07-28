// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll("a[href^='#']");
linksInternos.forEach((item) => {
  item.addEventListener("click", handleClickLinkInterno);
});
function handleClickLinkInterno(event) {
  event.preventDefault();
  linksInternos.forEach((item) => {
    item.classList.remove("ativo");
  });
  event.target.classList.add("ativo");
}

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const body = document.body;
const body = document.querySelectorAll("body *");
body.forEach((item) => {
  item.addEventListener("click", handleClickBody);
});
// body.addEventListener("click", handleClickBody);
function handleClickBody(event) {
  console.log(event.target, event.currentTarget);
}

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
body.forEach((item) => {
  item.addEventListener("click", handleClickBody2);
});
// body.addEventListener("click", handleClickBody2);
function handleClickBody2(event) {
  event.target.remove();
  // event.currentTarget.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
window.addEventListener("keyup", handleKeyboard);
function handleKeyboard(event) {
  if (event.key === "t") {
    // const html = document.querySelector("html");
    const html = document.documentElement;
    html.classList.toggle("font-size-aumentada");
  }
}
