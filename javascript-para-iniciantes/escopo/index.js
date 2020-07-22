"use strict";

var carro = "Fusca";
function mostraCarro() {
  console.log(carro);
}

mostraCarro();
console.log(carro);

{
  const mes = "Dezembro";
  console.log(mes);
} // Bloco
// console.log(mes);

{
  var carro2 = "Fusca 2";
  const ano = 2020;
} // Bloco
console.log(carro2);
// console.log(ano);

var i = 50;
for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(`Vazou ${i}`);

let l = 50;
for (let l = 0; l < 10; l++) {
  console.log(`Número ${l}`);
}
console.log(`Vazou ${l}`);

const semana = "Sexta";
console.log(semana);
// semana = "Quinta"; // Erro na execução (atribuição)
// const semana = "Quinta"; // Erro no hoisting (declaração da variável)

const data = {
  ano: 2018,
  mes: "Dezembro",
};
console.log(data);
data.ano = 2019;
// data = "Isso"; Data é constante
data.dia = 25;
console.log(data);

let ano;
ano = 2018;
ano++;
console.log(ano);
// let ano = 2020; // Erro no hoisting (declaração da variável)
