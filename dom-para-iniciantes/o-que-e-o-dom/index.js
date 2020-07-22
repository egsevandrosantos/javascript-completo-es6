// window.alert("Isso mesmo");
// alert("É isso mesmo"); // Por padrão o window é invocado

const href = window.location.href;
console.log(href);
if (href === "http://127.0.0.1:5500/dom-para-iniciantes/o-que-e-o-dom/")
  console.log("É igual");

const h1Titulo = document.querySelector("h1");
const h1TituloClasses = h1Titulo.classList;
console.log(h1TituloClasses);

function callbackH1Titulo() {
  console.log("Clicou em", h1Titulo.innerText);
}

h1Titulo.addEventListener("click", callbackH1Titulo);
