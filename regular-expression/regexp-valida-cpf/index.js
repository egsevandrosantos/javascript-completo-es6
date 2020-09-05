import ValidarCpf from "./validar-cpf.js";

const cpfElement = document.querySelector("#cpf");
const validarCpf = new ValidarCpf(cpfElement);

console.log(validarCpf);
