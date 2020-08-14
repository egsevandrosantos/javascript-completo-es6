const perimetro = new Function("lado", "return lado * 4");
console.log(perimetro(5));

function somar(n1, n2) {
  return n1 + n2;
}

console.log(somar.length);
console.log(somar.name);

function darOi(nome, idade) {
  console.log(`Oi para você ${nome}, ${idade}`);
}

darOi("André", 28);
darOi.call({}, "André", 28); // O primeiro argumento é o this que a função irá utilizar, e depois os parametros separados por vírgula

const carro = {
  marca: "Ford",
  ano: 2018,
};

function descricaoCarro(valor) {
  console.log(this);
  console.log(this.marca + " " + this.ano + " " + valor);
}

descricaoCarro();
descricaoCarro("R$ 0,00");
descricaoCarro.call();
descricaoCarro.call(this, "R$ 0,00");
descricaoCarro.call({ marca: "Honda", ano: 2015 }); // Mudamos o this dentro da função para o this apontar para o objeto criado agora
descricaoCarro.call({ marca: "Honda", ano: 2015 }, "R$ 0,00");
descricaoCarro.call(carro); // Mudamos o this dentro da função para o this apontar para o objeto carro
descricaoCarro.call(carro, "R$ 0,00");

const carros = ["Ford", "Fiat", "VW"];
const frutas = ["Banana", "Abacate"];

frutas.forEach.call(carros, (item) => {
  console.log(item);
}); // ForEach em carros pois mudamos o this

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativar = function (classe) {
  console.log(this);
  this.element.classList.add(classe);
};

const ul = new Dom("ul");
const li = new Dom("li");
ul.ativar("ativar"); // this é ul
// ul.ativar.call(li, "ativar"); // this é li
Dom.prototype.ativar.call(li, "ativar");

Array.prototype.mostrarThis = function () {
  console.log(this);
};

frutas.mostrarThis();
Array.prototype.pop.call(frutas); // this é frutas
frutas.mostrarThis();

const arrayLike = {
  0: "Item 1",
  1: "Item 2",
  2: "Item 3",
  length: 3,
};

const arrayLikeFiltrada = Array.prototype.filter.call(
  arrayLike,
  (item) => item === "Item 1"
);
console.log(arrayLike, arrayLikeFiltrada);

const nodeListArrayLike = document.querySelectorAll("li");
const filtro = Array.prototype.filter.call(
  nodeListArrayLike,
  (item) => item.innerText === "Item 1"
);
console.log(nodeListArrayLike, filtro);

console.log("=== APPLY ===");
const numeros = [3, 4, 7, 4, 2, 6, 7, 3, 9, 10, 28, 2];
console.log(Math.max.call(null, numeros));
console.log(Math.max.call(null, ...numeros));
console.log(Math.max.apply(null, numeros)); // Diferente do call que recebe argumentos separados por virgula, o apply recebe os argumentos em array e ele próprio os separa

console.log("=== BIND ===");
const filtro2 = Array.prototype.filter.bind(
  nodeListArrayLike,
  (item) => item.innerText === "Item 1"
);
console.log(filtro2);
console.log(filtro2());
// Diferente do call que ativa a função, o bind não ativa a função por default

const $ = document.querySelectorAll.bind(document);
const $sempreUl = document.querySelectorAll.bind(document, "ul");
console.log($("li"));
console.log($sempreUl());
console.log($sempreUl("li"));

const carro2 = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (velocidade, tempo) {
    return `${this.marca} acelerou ${velocidade} em ${tempo}`;
  },
};

console.log(carro2, carro2.acelerar(100, 2));

const honda = {
  marca: "Honda",
};
const hondaAcelerar = carro2.acelerar.bind(honda, 100, 2);
console.log(honda, hondaAcelerar());
const hondaAcelerar2 = carro2.acelerar.bind(honda, 100);
console.log(honda, hondaAcelerar2(3));
