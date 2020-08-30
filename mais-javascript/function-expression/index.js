// console.log(somar(1, 2));
// console.log(somar2(1, 2)); // Erro

// Function declaration
function somar(a, b) {
  return a + b;
} // Hoisting leva o corpo de somar, então funciona chamando antes

// Function expression
const somar2 = function (a, b) {
  return a + b;
}; // Hoisting leva a variável para Tempory Dead Zone, e somente depois vai atribuir, então não funciona chamando antes

// console.log(somar(1, 2));
// console.log(somar2(1, 2));

const somar3 = (a, b) => a + b;
const quadrado = (a) => a * a;

function dividir(a, b) {
  return a / b;
}

const dividir2 = (a, b) => a / b;

// Escolher entre usar Function declaration ou Function expression é uma questão de gosto, em alguns casos de necessidade, caso precise chamar a função antes de ela realmente ser declarada.
// A Function declaration entra no objeto window, possivelmente sobreescrevendo um método já existente desse objeto, já a Function expression não entra no objeto window, anulando assim essa possibilidade

// IIFE
const instrumento = "Violão";
const leitor = "Kindle";
(() => {
  const instrumento = "Guitarra";
  console.log(instrumento, leitor);
})();
console.log(instrumento, leitor);
