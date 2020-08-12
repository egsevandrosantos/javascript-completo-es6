// const instrumentos = ["Guitarra", "Baixo", "Violão"];
const carros = new Array("Corola", "Mustang", "Honda");

console.log(carros[1], carros[2], carros.length);
carros[2] = "Ferrari";
console.log(carros[2], carros[10]);
carros[10] = "Parati";
console.log(carros[10], carros.length);

const lis = document.querySelectorAll("li");
console.log(lis);

const arrayLi = Array.from(lis);
console.log(arrayLi);

const objLikeArray = {
  0: "André",
  1: "Rafael",
  2: "Teste",
  4: "Ok",
  length: 5,
};

const objArray = Array.from(objLikeArray);
console.log(objArray);

console.log(Array.isArray(lis), Array.isArray(arrayLi));

const array1 = Array.of(10);
const array2 = Array.from(10);
const array3 = Array.from([10]);
const array4 = Array(10);
console.log(array1, array2);
console.log(array3, array4);

const instrumentos = ["Guitarra", "Baixo", "Violão"];
console.log(instrumentos);
instrumentos.sort();
console.log(instrumentos);

const idades = [32, 21, 33, 43, 1, 12, 8];
console.log(idades);
idades.sort();
console.log(idades);

const carros2 = ["Ford", "Fiat", "VW"];
console.log(carros2);
carros2.unshift("Kia", "Ferrari");
console.log(carros2);
carros2.push("Toyota", "Hyundai");
console.log(carros2);
console.log(carros2.pop(), carros2);
console.log(carros2.shift(), carros2);
console.log(carros2.reverse(), carros2);

console.log(carros2.splice(2, 0, "Fusca"), carros2);
console.log(carros2.splice(2, 1, "Gol"), carros2);
console.log(carros2.splice(2, 2, "Voyage"), carros2);
console.log(carros2.splice(2, 1), carros2);

const arrCopy = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
console.log(arrCopy.copyWithin(0, 0, 0));
console.log(arrCopy.copyWithin(2, 0, 2));
console.log(arrCopy.copyWithin(-1));

console.log(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].fill("Banana"));
console.log(
  ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].fill("Banana", 1)
);
console.log(
  ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].fill("Banana", 1, 3)
);

const transporte1 = ["Barco", "Avião"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2, "Metro", "Helicoptero");
const maisTransportes = [].concat(transporte1, transporte2, "Van", "Onibus");
console.log(transportes, maisTransportes);

const linguagens = ["html", "css", "js", "php", "python", "js"];
console.log(linguagens.includes("js"));
console.log(linguagens.includes("ruby"));
console.log(linguagens.indexOf("js"));
console.log(linguagens.lastIndexOf("js"));
console.log(linguagens.indexOf("ruby"));
console.log(linguagens.lastIndexOf("ruby"));

let htmlString = "<h2>Titulo principal</h2>";
const arrHtmlString = htmlString.split("h2");
htmlString = arrHtmlString.join("h1");
console.log(arrHtmlString.join());
console.log(arrHtmlString.join(""));
console.log(htmlString);

// Clonagem de array
const arrToClone = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
const arrClonado = arrToClone; // Faz referencia ao endereço de memória
const arrClonado2 = arrToClone.slice(); // Jeito certo
console.log(arrToClone.fill("Banana"), arrClonado, arrClonado2);

console.log(linguagens.slice(2));
console.log(linguagens.slice(2, 5));
