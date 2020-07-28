const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-lista");
const animaisDescricao = document.querySelector(".animais-descricao");

console.log(animaisLista.innerHTML);
console.log(animaisDescricao.innerHTML);

// innerHtml -> Html de dentro
// outerHtml -> Html do elemento + Html de dentro
// innerText -> Texto de dentro
// outerText -> Texto do elemento + Texto de dentro

const lista = document.querySelector(".animais-lista");
console.log(lista);
console.log(lista.parentElement); // pai
console.log(lista.parentElement.parentElement); // pai do pai
console.log(lista.nextElementSibling); // próximo irmão
console.log(lista.previousElementSibling); // irmão anterior
console.log(lista.children); // filhos
console.log(lista.children[--lista.children.length]); // ultimo filho

const ultimoLiLista = lista.querySelector("li:last-child");
console.log(ultimoLiLista);

console.log(lista.childNodes); // Node != Element
console.log(lista.previousSibling); // Node irmão anterior
console.log(lista.nextSibling); // Node próximo irmão

const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const tituloContato = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");

// animais.appendChild(tituloContato); // move (remove e adiciona)
// contato.insertBefore(animais, tituloContato); // insere em contato os animais antes do tituloContato
// contato.removeChild(tituloContato); // remove tituloContato de contato
// contato.replaceChild(mapa, tituloContato); // remove mapa e substitui tituloContato por mapa em contato

const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo titulo";
novoH1.classList.add("titulo");
console.log(novoH1);
mapa.appendChild(novoH1);

const faq = document.querySelector(".faq");
const cloneH1 = h1.cloneNode(true);
cloneH1.innerText = "H1 clonado";
// faq.appendChild(h1); // Move (remove e insere) h1
faq.appendChild(cloneH1);
