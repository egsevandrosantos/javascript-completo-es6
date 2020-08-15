const pessoa = new Object({
  nome: "André",
});

console.log(pessoa);

const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou`;
  },
  buzinar() {
    return `${this.marca} buzinou`;
  },
};

const honda = Object.create(carro).init("Honda");
console.log(honda.acelerar());

const ferrari = Object.create(carro).init("Ferrari");

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

Object.assign(moto, funcaoAutomovel); // Atribui novas funções e propriedades e caso já exista no objeto original sobreescreve
console.log(moto);

const moto2 = {
  rodas: 2,
};
console.log(moto2);
moto2.rodas = 3;
console.log(moto2);
delete moto2.rodas;
console.log(moto2);

Object.defineProperties(moto2, {
  rodas: {
    value: 2,
    configurable: false,
    writable: false,
    enumerable: true,
  },
  capacete: {
    // Com Get e Set não pode ter value
    // Get e Set são explicitos, mas tem funcionamento padrão
    get() {
      return this._capacete;
    },
    set(valor) {
      this._capacete = !valor;
    },
  },
}); // Por padrão configurable, writable, enumerable já são false
// configurable pode deletar e mudar valor?
// writable pode mudar valor?
// enumerable é enumerável?
console.log(moto2);
moto2.rodas = 5;
console.log(moto2);
delete moto2.rodas;
console.log(moto2);

console.log(Object.getOwnPropertyDescriptors(moto2));
console.log(Object.getOwnPropertyDescriptors(moto2.__proto__));
console.log(Object.getOwnPropertyDescriptors(Array));
console.log(Object.getOwnPropertyDescriptors(Array.prototype));
console.log(Object.getOwnPropertyDescriptor(window, "innerHeight"));

console.log(Object.keys(moto2));
console.log(Object.values(moto2));
console.log(Object.entries(moto2));
// Retorna apenas se for enumerable

console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(moto2));
// Retorna todos, inclusive não enumerable

const frutas = ["Banana"];

console.log(Object.getPrototypeOf(frutas));
console.log(Object.getPrototypeOf(""));

const frutas2 = ["Banana"];
const novaFrutas = frutas; // Aqui não é um novo, é uma referência
console.log(Object.is(frutas, frutas2));
console.log(Object.is(frutas, novaFrutas));

const carro2 = {
  marca: "Ford",
  ano: 2018,
  paraDelete: true,
};

const carro3 = Object.assign({}, carro2);
carro3.marca = "Honda";
console.log(carro3);
Object.freeze(carro3);
carro3.marca = "Fiat"; // Não muda
carro3.portas = 4; // Não cria
delete carro3.paraDelete; // Não deleta
console.log(carro3);

const carro4 = Object.assign({}, carro2);
carro4.marca = "Hinday";
console.log(carro4);
Object.seal(carro4);
carro4.marca = "Fiat"; // Muda
carro4.portas = 4; // Não cria
delete carro4.paraDelete; // Não deleta
console.log(carro4);

const carro5 = Object.assign({}, carro2);
carro5.marca = "Mitsubish";
console.log(carro5);
Object.preventExtensions(carro5);
carro5.marca = "VW"; // Muda
carro5.portas = 4; // Não cria
delete carro5.paraDelete; // Deleta
console.log(carro5);

console.log(
  Object.isFrozen(carro3),
  Object.isSealed(carro3),
  Object.isExtensible(carro3)
);
console.log(
  Object.isFrozen(carro4),
  Object.isSealed(carro4),
  Object.isExtensible(carro4)
);
console.log(
  Object.isFrozen(carro5),
  Object.isSealed(carro5),
  Object.isExtensible(carro5)
);

console.log(frutas.hasOwnProperty("map"));
console.log(frutas.__proto__.hasOwnProperty("map"));
console.log(Array.hasOwnProperty("map"));
console.log(Array.prototype.hasOwnProperty("map"));

console.log(Array.prototype.isPrototypeOf(frutas));

const frutas3 = ["Banana", "Uva"];
const somar = () => {
  return 2 + 2;
};
const carro6 = {
  marca: "Ford",
  pneus: 4,
};
const frase = "Olá mundo";
const uls = document.querySelectorAll("ul");

console.log(frutas3.toString());
console.log(somar.toString());
console.log(carro6.toString());

console.log(typeof carro6);
console.log(typeof uls);

console.log(Object.prototype.toString.call(frutas));
console.log(Object.prototype.toString.call(carro6));
console.log(Object.prototype.toString.call(uls));
console.log(Object.prototype.toString.call(frase));
console.log(Object.prototype.toString.call(somar));
