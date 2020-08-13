const carros = ["Ford", "Fiat", "Honda"];
console.log(carros);
carros.forEach((item, index, array) => {
  if (index === 1) {
    array.push("VW");
  }
  console.log(item, index, array);
});
console.log(carros);

const li = document.querySelectorAll("li");
console.log(li);
const retornoForEach = li.forEach((item) => {
  item.classList.add("ativo");
});
console.log(li);
console.log(retornoForEach);

console.log("=== MAP ===");

let carrosMap = carros.map((item, index, array) =>
  console.log(item, index, array)
);
console.log(carrosMap, carros);

carrosMap = carros.map((item, index, array) => {
  console.log(item, index, array);
  return index;
});
console.log(carrosMap, carros);

carrosMap = carros.map((item, index, array) => {
  console.log(item, index, array);
  return item.toUpperCase();
});
carrosMap[0] = "Valor modificado";
console.log(carrosMap, carros);

const numerosX2 = [2, 4, 6, 8, 10].map((n) => n * 2);
console.log(numerosX2);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);
console.log(tempoAulas);

const nomeAulas = (aula, index, array) => {
  console.log(aula, index, array);
  return aula.nome;
};

const nomeAulas2 = (aula) => aula.nome;

const arrayNomeAulas = aulas.map(nomeAulas2);
console.log(arrayNomeAulas);

console.log("=== REDUCE ===");

console.log(tempoAulas);
const reduceAulas = tempoAulas.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item);
  return acumulador + item;
  // acumulador vira o valor de return na próxima iteração
  // se não tiver return, na próxima iteração o acumulador será undefined, undefined é o retorno padrão
}, 0); // 0 é o primeiro valor de acumulador
console.log(reduceAulas);

const numeros = [10, 25, 60, 5, 35, 10];
const maiorNumero = numeros.reduce((acumulador, item) =>
  acumulador > item ? acumulador : item
); // O primeiro valor de acumulador é a primeira iteração e a primeira iteração é pulada
console.log(numeros, maiorNumero);

const listaAulas = aulas.reduce((acumulador, item, index) => {
  acumulador[index] = item.nome;
  return acumulador;
}, {});
listaAulas.length = aulas.length;
console.log(listaAulas, Array.from(listaAulas));

console.log("=== SOME ===");

const frutas = ["Banana", "Pêra", "Uva"];
const temUva = frutas.some((item) => item === "Uva");
console.log(temUva);

const temUva2 = frutas.some((item) => item === "Uvas");
console.log(temUva2);
// Some = 1 valor é true ? true : false
// Retorna o 1º true ou passa por tudo sem achar true e retorna false

console.log("=== EVERY ===");

const numeros2 = [6, 43, 22, 88, 101, 29];
const todosMaiorQue6 = numeros2.every((item) => item > 6);
const todosMaiorQue3 = numeros2.every((item) => item > 3);
console.log(todosMaiorQue6, todosMaiorQue3);
// Every = Todos é true ? true : false
// Retorna o 1º false ou passa por tudo sem achar false e retorna true

console.log("=== FIND - FIND INDEX ===");
const indexUva = frutas.findIndex((item) => item === "Uva");
const uva = frutas.find((item) => item === "Uva");
console.log(indexUva, uva);

const indexOvo = frutas.findIndex((item) => item === "Ovo");
const ovo = frutas.find((item) => item === "Ovo");
console.log(indexOvo, ovo);

console.log("=== Filter ===");

const frutas2 = ["Banana", undefined, null, "", "Uva", 0, "Maçã", NaN];
const arrayLimpa = frutas2.filter((item) => item);
console.log(frutas2, arrayLimpa);

const maiores15 = aulas.filter((item) => item.min > 15);
console.log(maiores15);
