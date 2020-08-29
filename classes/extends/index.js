class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }

  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete;
  }

  empinar() {
    console.log("Empinou " + this.rodas);
  }

  acelerar() {
    super.acelerar();
    console.log("Acelerou Moto");
  }
}

const honda = new Moto(2, true);
console.log(honda);
console.log(honda instanceof Moto);
console.log(honda instanceof Veiculo);
honda.acelerar();
honda.empinar();

const civic = new Veiculo(4);
console.log(civic);
console.log(civic instanceof Moto);
console.log(civic instanceof Veiculo);
civic.acelerar();
civic.empinar();
