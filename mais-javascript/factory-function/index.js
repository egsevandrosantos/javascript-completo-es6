function createButton(text) {
  return {
    element: () => {
      const btn = document.createElement("button");
      btn.innerText = text;
      return btn;
    },
    text,
  };
}

const btnBlue = createButton("Comprar");
btnBlue.text = "Novo comprar";
console.log(btnBlue);
console.log(btnBlue.element());

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;
  const andar = () => `${nomeCompleto} andou`;
  return Object.freeze({
    andar,
  }); // Ice factory
}

const evandroSantos = criarPessoa("Evandro", "Santos");
evandroSantos.andar = "Isso não é mais uma função"; // Nada acontece, pois é ice factory
console.log(evandroSantos.andar());
console.log(evandroSantos.nomeCompleto); // Não tenho acesso pois não é retornado

function Pessoa(nome) {
  // if (!(this instanceof Pessoa)) {
  if (!new.target) {
    return new Pessoa(nome);
  }
  this.nome = nome;
} // Não precisa do new para declarar

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

const designer = Pessoa("Evandro");
console.log(designer);
console.log(designer.andar());
