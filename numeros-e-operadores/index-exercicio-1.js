// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; // 35
console.log(total);
// Crie duas expressões que retornem NaN
var nan1 = "Isso" / 4,
  nan2 = "Aquilo" - 3;
console.log(nan1, nan2);
// Somar a string '200' com o número 50 e retornar 250
console.log(+"200" + 50);
// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(++incremento);
// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN (Not a Number)
var pesoPorDois = +numero / 2;
console.log(`${pesoPorDois}${unidade}`);
