console.log(Number.isNaN(60));
console.log(Number.isNaN(true));
console.log(Number.isNaN(NaN));
console.log("=== / ===");
console.log(Number.isInteger(20));
console.log(Number.isInteger(23.6));
console.log(Number.isInteger(true));
console.log(Number.isInteger(NaN));
console.log("=== / ===");
console.log(parseFloat("340.09"));
console.log(parseFloat("340,09"));
console.log(parseFloat("R$ 340.09"));
console.log(parseFloat(" 340.09"));
console.log(parseFloat(" 340.09 R$"));
console.log(parseInt(" 340.09 R$"));
console.log(parseInt("a"), parseInt(NaN));
console.log("=== / ===");
const preco = 10.32323;
console.log(preco.toFixed());
console.log((99.99).toFixed());
console.log((99.99).toFixed(1), (99.99).toFixed(2), (99.99).toFixed(3));
console.log((99.01).toFixed());
console.log((99.01).toFixed(1), (99.01).toFixed(2), (99.01).toFixed(3));
console.log("=== / ===");
console.log(
  preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
console.log(
  preco.toLocaleString("en-US", { style: "currency", currency: "USD" })
);
console.log(
  preco.toLocaleString("pt-BR", { style: "currency", currency: "USD" })
);
console.log(
  preco.toLocaleString("en-US", { style: "currency", currency: "BRL" })
);
console.log("=== / ===");
console.log(Math.PI);
console.log(Math.abs(-3));
console.log(Math.abs(3));
const num1 = 4.49,
  num2 = 4.51,
  num3 = 4.5;
console.log(Math.ceil(num1)); // Arredonda pra cima
console.log(Math.ceil(num2));
console.log(Math.ceil(num3));
console.log(Math.floor(num1)); // Arredonda pra baixo
console.log(Math.floor(num2));
console.log(Math.floor(num3));
console.log(Math.round(num1)); // Arredonda pro mais proximo
console.log(Math.round(num2));
console.log(Math.round(num3));
console.log(Math.max(1, 2, 6, 5, 4, 7, 9, 2));
console.log(Math.min(2, 6, 5, 4, 1, 7, 9, 2));
console.log(Math.random()); // Entre 0 e 1
console.log(Math.random() * 100); // Entre 0 e 100
console.log(Math.random() * 500); // Entre 0 e 500
console.log(parseInt(Math.random() * 900)); // Entre 0 e 900 inteiro

// Número aleatório entre max e min
// Onde max é o maior valor e min o menor valor
// parseInt(Math.random() * (max - min + 1)) + min
// Um exemplo onde os números são 32 e 72
// 72 é o max e 32 o min
// Número aleatório entre 72 e 32
console.log(parseInt(Math.random() * (72 - 32 + 1)) + 32);
// Número aleatório entre 2 e 1
console.log(parseInt(Math.random() * (2 - 1 + 1)) + 1);
