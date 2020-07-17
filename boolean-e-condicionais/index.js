var possuiDoutorado = true;
var possuiGraduacao = false;

if (possuiGraduacao) {
  console.log("Graduação");
} else if (possuiDoutorado) {
  console.log("Doutorado");
} else {
  console.log("Nada");
}

var nome = "André";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

if (!possuiGraduacao) {
  console.log("Não possui graduação");
}

var x = 10;
console.log(x === 10);

var condicional = 5 - 5 && 5 + 5;
console.log(condicional);
if (condicional) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

var corFavorita = "Azul";
switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  default:
    console.log("Feche os olh0s");
}
