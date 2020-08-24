// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const form = document.forms.formCep;
form.elements.buscar.addEventListener("click", handleBuscaCep);

function handleBuscaCep() {
  const cep = form.elements.cep.value;
  const cepResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

  cepResult
    .then((result) => result.json())
    .then((result) => {
      const p = document.querySelector("#formCep p.endereco");
      const keys = Object.keys(result);
      keys.forEach((key) => {
        p.innerHTML += key + ": " + result[key] + "<br />";
      });
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
function atualizarBitcoin() {
  const blockchain = fetch("https://blockchain.info/ticker");

  blockchain
    .then((result) => result.json())
    .then((result) => {
      const valor = result.BRL.buy;
      const span = document.querySelector(".bitcoin span.valor");
      span.innerText = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    });
}

atualizarBitcoin();

setInterval(atualizarBitcoin(), 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const divPiadas = document.querySelector("div.piadas");
const listaPiadas = divPiadas.firstElementChild;
const btnProximaPiada = divPiadas.lastElementChild;
btnProximaPiada.addEventListener("click", handleClickProximaPiada);

function handleClickProximaPiada() {
  const piadaFetch = fetch("https://api.chucknorris.io/jokes/random");

  piadaFetch
    .then((result) => result.json())
    .then((result) => {
      const p = document.createElement("p");
      p.innerText = result.value;
      listaPiadas.appendChild(p);
    });
}
