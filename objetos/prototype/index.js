function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.sentar = function () {
    // Aqui cria a função todas as vezes que eu criar uma Pessoa com keyword new
    return `${this.nome} sentou`;
  };
  this.andar = function () {
    // Ele primeiro procura a função no objeto, caso não encontre, ele busca no prototype, ou seja, funções criadas no objeto tem preferência sobre o prototype
    return `${this.nome} andou pelo objeto`;
  };
}
Pessoa.prototype.andar = function () {
  // Aqui cria a função uma única vez no prototype para que as instâncias do objeto Pessoa tenha acesso a função
  return `${this.nome} andou`;
};
Pessoa.prototype.nadar = function () {
  return `${this.nome} nadou`;
};

const andre = new Pessoa("André", 28);

console.log(Pessoa.prototype, andre.prototype, andre.__proto__);

// Função construtora tem acesso ao prototype, objetos de instância tem acesso ao __proto__

const pais = "Brasil";
const cidade = new String("Rio");

const listaAnimais = ["Cachorro", "Gato", "Cavalo"];

const lista = document.querySelectorAll("li");
const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);
// [1, 2, 3].slice();
// [1, 2, 3].from();
// Instancia do objeto array tem acesso ao slice pois slice está no protótipo, já from não tem acesso porque from está na função construtora e não no protótipo

console.log(
  new String("asd").toUpperCase(),
  new String("abc").__proto__.toUpperCase(),
  String.prototype.toUpperCase(),
  String.prototype.toUpperCase.call("def")
);

console.log(
  Object.getOwnPropertyNames(Array),
  Object.getOwnPropertyNames(Array.prototype)
);

console.log(
  Object.getOwnPropertyNames(andre),
  Object.getOwnPropertyNames(andre.__proto__),
  Object.getOwnPropertyNames(Pessoa),
  Object.getOwnPropertyNames(Pessoa.prototype)
);

const carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};

console.log(
  carro.preco.constructor.name,
  carro.andar.constructor.name,
  carro.andar().constructor.name
);
