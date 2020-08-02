// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let valoresTaxa = 0;
let valoresRecebimento = 0;
transacoes.forEach((item) => {
  const descricao = item.descricao.toLowerCase().trim();
  const valor = +item.valor.replace("R$", "").trim();
  if (descricao.startsWith("taxa")) {
    valoresTaxa += valor;
  } else if (descricao.startsWith("recebimento")) {
    valoresRecebimento += valor;
  }
});
console.log(valoresTaxa, "/", valoresRecebimento);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
console.log(transportes.split(";"));

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const htmlArr = html.split("span");
const htmlAs = htmlArr.join("a");
console.log(html, "\n", htmlAs);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
let totalTaxas = 0;
transacoes2.forEach((item) => {
  if (item.trim().toLowerCase().startsWith("taxa")) {
    totalTaxas++;
  }
});
console.log(totalTaxas);
