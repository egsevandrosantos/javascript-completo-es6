const button = {
  get tamanho() {
    return this._tamanho || 100;
  },
  set tamanho(tamanho) {
    this._tamanho = tamanho;
  },
};

const frutas = {
  lista: [],
  set novaFruta(fruta) {
    this.lista.push(fruta);
  },
  get frutas() {
    return this.lista;
  },
};

console.log(frutas.lista);
frutas.novaFruta = "Banana"; // Set é um metódo, mas é acessado com o operador de atribuição, e não como um metódo
console.log(frutas.lista);
console.log(frutas.frutas); // Get é um metódo, mas é acessado como se fosse uma propriedade, e não como um metódo

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || "button";
    const button = document.createElement(type);
    button.innerText = this.text;
    button.style.color = this.color;
    return button;
  }
  set element(elementType) {
    this._elementType = elementType;
  }
}

const blueButton = new Button("Comprar", "blue");
console.log(blueButton.element);

const blueButton2 = new Button("Vender", "red");
blueButton2.element = "a";
console.log(blueButton2.element);
