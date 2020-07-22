// Crie uma função para verificar se um valor é Truthy
function verificaSeTrue(valor) {
  return !!valor;
}

console.log(verificaSeTrue(""));
console.log(verificaSeTrue(0));
console.log(verificaSeTrue(10));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  if (typeof lado !== "number") {
    return 0;
  }
  return lado * 4;
}

console.log(perimetroQuadrado(0));
console.log(perimetroQuadrado(1));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Evandro", "Santos"));

// Crie uma função que verifica se um número é par
function verificaSePar(num) {
  if (typeof num !== "number") {
    return false;
  }
  return num % 2 === 0;
}

console.log(verificaSePar(10));
console.log(verificaSePar(11));
console.log(verificaSePar());

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaTipo(valor) {
  return typeof valor;
}

console.log(verificaTipo());
console.log(verificaTipo(10));
console.log(verificaTipo(""));
console.log(verificaTipo(null));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("Scroll - Evandro Santos");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
