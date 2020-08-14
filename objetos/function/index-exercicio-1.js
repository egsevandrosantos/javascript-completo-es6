// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const ps = document.querySelectorAll("p");
const totalCaracteresP = Array.prototype.reduce.call(
  ps,
  (acumulador, item) => acumulador + item.innerText.length,
  0
);
console.log(totalCaracteresP);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function newHtml(tag, classe, conteudo) {
  const element = document.createElement(tag);
  element.classList.add(classe);
  element.innerText = conteudo;
  return element;
}
console.log(newHtml("p", "ativo", "Ok"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const newHtmlH1 = newHtml.bind(null, "h1", "titulo");
console.log(newHtmlH1("H1 1"));
console.log(newHtmlH1("p", "log", "H1 2"));
