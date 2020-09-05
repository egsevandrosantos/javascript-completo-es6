export default class ValidarCpf {
  constructor(element) {
    this.element = element;
    this.adicionarEvento();
    this.adicionarSpanErro();
  }

  limpar = (cpf) => cpf.replace(/\D/g, "");

  construir = (cpf) =>
    cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");

  formatar = (cpf) => {
    const cpfLimpo = this.limpar(cpf);
    return this.construir(cpfLimpo);
  };

  validar = (cpf) => {
    const matchCpf = cpf.match(/^(?:\d{3}[-.\s]?){3}\d{2}$/g);
    return !!matchCpf;
  };

  validarMudanca = (cpfElement) => {
    const value = cpfElement.value;
    const cpfValido = this.validar(value);
    if (cpfValido) {
      const cpfFormatado = this.formatar(value);
      cpfElement.value = cpfFormatado;
      cpfElement.classList.remove("error");
      cpfElement.nextElementSibling.classList.remove("ativo");
    } else {
      cpfElement.classList.add("error");
      cpfElement.nextElementSibling.classList.add("ativo");
    }
  };

  adicionarSpanErro = function () {
    const spanError = document.createElement("span");
    spanError.id = `${this.element.id}Error`;
    spanError.innerText = "CPF inválido";
    spanError.classList.add("error-text");
    this.element.insertAdjacentElement("afterend", spanError);
  };

  adicionarEvento = function () {
    // This é o input
    // this.element.addEventListener("change", function () {
    //   console.log(this);
    // });
    // This é o objeto classe
    this.element.addEventListener("change", () => {
      this.validarMudanca(this.element);
    });
  };
}
