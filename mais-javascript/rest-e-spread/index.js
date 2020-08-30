function perimetroForma(lado, totalLados = 4, ...args) {
  console.log(args);
  console.log(arguments);
  args.forEach(console.log);
  return lado * totalLados;
}

console.log(perimetroForma(10, 5, 30, "Oi", "Teste"));
console.log(perimetroForma(10));

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(`${ganhador} ganhou ${premio}`);
  });
}

const ganhadores = ["Evandro", "Gabriel", "André", "Rafael"];
anunciarGanhadores("Carro", "Evandro", "Gabriel", "André", "Rafael");
anunciarGanhadores("Carro", ...ganhadores);

const frutas = ["Banana", "Uva", "Morango"];
const legumes = ["Cenoura", "Batata"];

const comidas = [...frutas, "Pizza", ...legumes];
console.log(comidas);

const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
console.log(Math.max(...listaNumeros));

const btns = document.querySelectorAll("button");
console.log(
  btns,
  btns.__proto__.constructor.name,
  Object.prototype.toString.call(btns)
);
// const btnArr = Array.from(btns);
const btnArr = [...btns];
console.log(
  btnArr,
  btnArr.__proto__.constructor.name,
  Object.prototype.toString.call(btnArr)
);
