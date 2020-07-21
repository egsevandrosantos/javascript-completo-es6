var numero = 20;
numero += 10;
console.log(numero);

var numero2 = 10;
numero += numero2;
console.log(numero, numero2);

var idade = 20;
var diabetes = false;
var podeBeber;
podeBeber = idade >= 18 && !diabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

var possuiFaculdade = false;
if (possuiFaculdade) console.log("Sim possui");
console.log("Isso mesmo");
