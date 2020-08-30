const carro = {
  marca: "Honda",
  ano: 2018,
};

// const marca = carro.marca;
// const ano = carro.ano;
const { marca, ano, portas } = carro;

console.log(carro.marca, carro.ano, carro.portas);
console.log(marca, ano, portas);

const cliente = {
  nome: "André",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Vídeo JS", "Vídeo HTML"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);
// const { livros, videos } = cliente.compras.digitais;
// console.log(livros, videos);
const {
  digitais,
  fisicas,
  digitais: { livros, videos },
} = cliente.compras;
console.log(digitais, fisicas, livros, videos);

const { nome: nomeAndre, email = "andre@rafael.com" } = cliente;
// console.log(nome); // Erro
console.log(nomeAndre, email);

const frutas = ["Banana", "Uva", "Morango"];
const [primeiraFruta, segundaFruta, terceiraFruta, quartaFruta] = frutas;
console.log(primeiraFruta, segundaFruta, terceiraFruta, quartaFruta);

const [primeiro, segundo, terceiro] = ["Item 1", "Item 2", "Item 3"];
console.log(primeiro, segundo, terceiro);

document.addEventListener("keyup", handleKeyUp);

function handleKeyUp({ key, keyCode }) {
  // Destructuring
  // console.log(event.key, event.keyCode);
  console.log(key, keyCode);
}
