// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function() {
//   const button = document.createElement("button");
//   button.innerText = this.text;
//   button.style.background = this.background;
//   return button;
// };

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }

  element() {
    const button = document.createElement("button");
    button.innerText = this.text;
    button.style.background = this.background;
    return button;
  }

  appendTo(target) {
    console.log(this);
    const element = document.querySelector(target);
    element.appendChild(this.element());
  }

  static blueButton(text) {
    return new Button(text, "blue");
  }
}

const blueButton = new Button("Comprar", "blue");
const blueButton4 = Button.blueButton("Comprar static");

console.log(blueButton);
console.log(blueButton4);
console.log(blueButton.element());
blueButton.appendTo("body");

class Button2 {
  constructor(options) {
    this.options = options;
  }
}

const blueButton2 = new Button2({
  background: "blue",
  text: "Comprar",
  color: "white",
});
console.log(blueButton2, blueButton2.options);

class Button3 {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const button = document.createElement("button");
    button.innerText = text;
    button.style.background = background;
    console.log(this, this.options);
    return button;
  }
}

Button3.createButton("Clicar", "blue");

const blueButton3 = new Button3({
  obj: "obj",
});
Button3.createButton.call(blueButton3, "Clicar", "blue");
