const frutas = ["Banana", "Morango", "Uva"];
const frase = "Isso é Javascript";

fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) =>
  console.log(headers, isIterable(headers))
);

for (const fruta of frutas) {
  console.log(fruta);
}
console.log(...frutas);

for (const item of frase) {
  console.log(item);
}
console.log(...frase);

function isIterable(data) {
  const symbols = Object.getOwnPropertySymbols(data.__proto__);
  return symbols.includes(Symbol.iterator);
}

const btns = document.querySelectorAll("button");
for (const btn of btns) {
  btn.style.color = "blue";
}

const carro = {
  marca: "Honda",
  ano: 2018,
};

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: false,
  },
});

// for (const key of carro) { // carro is not iterable
for (const key in carro) {
  // Faz loop em cada propriedade enumeravel de um objeto que não seja simbolos
  console.log(key);
}

for (const fruta in frutas) {
  console.log(fruta); // index
}

const btnsStyles = getComputedStyle(btns[0]);
for (const key in btnsStyles) {
  console.log(key);
}

let i = 0;
do {
  console.log(i++);
} while (i <= 5);
