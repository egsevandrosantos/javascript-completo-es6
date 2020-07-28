// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: "Nome pessoa",
//   idade: 0,
//   andar() {
//     console.log(this.nome + " andou");
//   },
// };
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(`${this.nome} andou`);
  };
}
const maria = new Pessoa("Maria", 25);
maria.andar();
const joao = new Pessoa("João", 20);
joao.andar();

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(selector) {
  this.elements = document.querySelectorAll(selector);
  (this.addClass = function (clazz) {
    this.elements.forEach((item) => {
      item.classList.add(clazz);
    });
  }),
    (this.removeClass = function (clazz) {
      this.elements.forEach((item) => {
        item.classList.remove(clazz);
      });
    });
}
const lis = new Dom("ul li");
