// parseInt(Math.random() * (max - min + 1)) + min
// Retorne um número aleatório
// entre 1050 e 2000
console.log(parseInt(Math.random() * (2000 - 1050 + 1)) + 1050);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const numerosArr = numeros.split(", ");
console.log(Math.max(...numerosArr));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];
function limpaListaPreco() {
  const novosValores = [];
  let somaTotal = 0;
  listaPrecos.forEach((item) => {
    const valorLimpo = +item.toUpperCase().replace("R$", "").replace(",", ".");
    const novoValor = +valorLimpo.toFixed(2);
    novosValores.push(novoValor);
    somaTotal += novoValor;
  });
  console.log(
    novosValores,
    somaTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  );
  return somaTotal;
}
limpaListaPreco();
