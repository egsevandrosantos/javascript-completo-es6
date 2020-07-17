var pessoa = {
  nome: "André",
  idade: 28,
};

console.log(pessoa.idade);
console.log(pessoa);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return lado * this.lados;
  },
  cinco() {
    return 5;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco());

console.log(Math.random());

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000";
menu.color = "blue";
menu.esconder = function () {
  console.log("Escondi");
};
var bg = menu.backgroundColor;
console.log(menu.hasOwnProperty("width"));
console.log(menu.hasOwnProperty("widht"));
