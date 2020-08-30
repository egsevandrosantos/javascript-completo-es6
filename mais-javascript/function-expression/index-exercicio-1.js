// Remova o erro
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
const instrumento = "Violão";
const marca = "Caio";
// var nome = "Evandro"; // Vaza o escopo pro window
// console.log(window.nome);
(function () {
  var nome = "Evandro"; // Não vaza o escopo pro window
  console.log(window.nome, nome); // undefined, nome
  const instrumento = "Guitarra";
  console.log(instrumento, marca);
})();
console.log(instrumento, marca);

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();
const myCallback = () => console.log("Callback");
active(myCallback);
