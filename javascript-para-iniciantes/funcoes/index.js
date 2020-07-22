function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu não gosto de cores";
  }
}

console.log(corFavorita());
console.log(corFavorita("azul"));

function mostraConsole() {
  console.log("Oi");
}

// addEventListener("click", function () {
//   console.log("Oi");
// });
addEventListener("click", mostraConsole);

function imc2(peso, altura) {
  var imc = peso / altura ** 2;
  console.log(imc);
}

console.log(imc2(80, 1.8));

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor, preencha um número";
  }
  if (idade >= 60) {
    return true;
  }
  return false;
} // Não é aconselhavel retornar + de 1 tipo de dado

console.log(terceiraIdade(60));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

faltaVisitar(20);

var profissao = "Designer";
function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
// outrosDados(); // Erro de escopo
