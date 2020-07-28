function aula1() {
  function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
  }

  const honda = new Carro("Honda");

  const fiat = new Carro("Fiat", 3500);

  function Carro2(marca, precoInicial) {
    this.taxa = 1.2;
    const precoFinal = precoInicial * this.taxa;
    this.marca = marca;
    this.preco = precoFinal;
  }

  const mazda = new Carro2("Mazda", 5000);
}

function aula2() {
  // const dom = {
  //   selector: "li",
  //   element() {
  //     return document.querySelector(this.selector);
  //   },
  //   ativo() {
  //     this.element().classList.add("ativo");
  //   },
  // };
  // dom.ativo();
  // dom.selector = 'ul';
  // dom.ativo();

  function Dom(selector) {
    (this.element = function () {
      return document.querySelector(selector);
    }),
      (this.ativo = function () {
        this.element().classList.add("ativo");
      });
  }

  const li = new Dom("li");
  li.ativo();

  const ul = new Dom("ul");
  ul.ativo();

  const lastLi = new Dom("li:last-child");
  lastLi.ativo();
}

aula1();
aula2();
