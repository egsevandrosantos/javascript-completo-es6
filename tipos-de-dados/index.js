var nome = "André",
  idade = 28,
  time,
  estado = null;
console.log(nome, typeof nome, idade, typeof idade);
console.log(time, typeof time, estado, typeof estado);

var sobrenome = "Rafael";
console.log(nome + " " + sobrenome);

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(frase);
var frase2 = `Romário fez ${gols} gols`;
console.log(frase2);
