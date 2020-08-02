const comida = "Pizza";
const agua = new String("Água ");

console.log(comida.length, agua.length);
console.log(comida[0], agua[1]);

const frase = "A melhor comida";
console.log(frase[0], frase[frase.length], frase[--frase.length]);
console.log(
  frase.charAt(0),
  frase.charAt(frase.length),
  frase.charAt(--frase.length)
);
console.log(frase.charAt(frase.length) === "");

const frase2 = "A melhor linguagem é";
const linguagem = "Javascript";

const fraseFinal1 = frase2 + " " + linguagem;
const fraseFinal2 = `${frase2} ${linguagem}`;
const fraseFinal3 = frase2.concat(" ", linguagem);
console.log(fraseFinal1, fraseFinal2, fraseFinal3);

const listaFrutas = "Melancia, Banana, Laranja";
console.log(
  listaFrutas.includes("Banana"),
  listaFrutas.includes("Banana", 10),
  listaFrutas.includes("Banana", 11),
  listaFrutas.includes("anana", 11),
  listaFrutas.includes("Mamão"),
  "Banana".includes(listaFrutas),
  "Melancia, Banana, Laranja, Abacaxi".includes(listaFrutas),
  "Melancia, Abacaxi, Banana, Laranja".includes(listaFrutas)
);

console.log("Banana".startsWith("Ba"), "Banana".startsWith("ba"));
console.log("Banana".endsWith("na"), "Banana".endsWith("Na"));

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(0, 3));
console.log(transacao2.slice(0, 3));
console.log(transacao3.slice(0, 3));
console.log(transacao1.slice(12));
console.log(transacao1.slice(-4));
console.log(transacao1.slice(3, 6));
console.log(transacao1.slice(-4, -2));
console.log(transacao1.slice(-4, -6));
console.log(transacao1.slice(0, -1));
/*
  Slice corta string, recebe start e end, todos opcionais, para ter end deve ter start, se o importante é o end, passar start sempre como 0, sem end a string vai ser cortada do start até o final.
  String é base 0, então o último caracter é length - 1
  Se passar números negativos no start e no end, ela volta as casas que passar
*/

console.log(linguagem.substring(3, 5));
console.log(linguagem.substring(0, 1));
console.log(linguagem.substring(0));
console.log(linguagem.substring(-1));
// Substring é igual a slice mas não suporta valores < 0

console.log(
  "Banana".indexOf("B"),
  "Banana".indexOf("b"),
  "Banana".indexOf("a"),
  "Banana".lastIndexOf("B"),
  "Banana".lastIndexOf("b"),
  "Banana".lastIndexOf("a"),
  "Banana".indexOf("na"),
  "Banana".lastIndexOf("na")
);

const preco = "R$ 99,00";

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10));
  console.log(item.padStart(10, "-"));
});

listaPrecos.forEach((item) => {
  console.log(item.padEnd(10));
  console.log(item.padEnd(10, "-"));
});

const frase3 = "Oi ";
console.log(frase3.repeat(3));

let listaItens = "Camisa Bonés Calças Bermudas Vestidos Saias";
console.log(listaItens);
listaItens = listaItens.replace(" ", ", "); // Só o 1º
console.log(listaItens);
listaItens = listaItens.replace(/[ ]+/g, ", "); // A regex pega todos
console.log(listaItens);
listaItens = listaItens.replace(",", "");
console.log(listaItens);

const arrayLista = listaItens.split(", ");
console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
console.log(htmlArray);

const frutasArray = ["Banana", "Melancia", "Laranja"];
console.log(frutasArray, frutasArray.join("a"));

const novoHtml = htmlArray.join("section");
console.log(novoHtml);

console.log("Feminino".toLowerCase(), "Feminino".toUpperCase());

console.log(
  "    abc    ".trim(),
  "--",
  "    abc    ".trimEnd(),
  "--",
  "    abc    ".trimStart()
);
