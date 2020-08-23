// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.forms.contato);
// console.log(document.forms.contato.elements);
// console.log(document.forms.contato.elements[0]);
// console.log(document.forms.contato.elements.nome);
// console.log(document.forms.contato.elements.nome.value);

const contatoForm = document.forms.contato;
const texto = document.querySelector(".texto");
const dados = {};

function handleKeyUp(event) {
  const target = event.target;
  // if (!target.checkValidity()) {
  //   target.classList.add("invalido");
  //   contatoForm.nome.setCustomValidity("Erro personalizado");
  //   target.nextElementSibling.innerText = target.validationMessage;
  // } else {
  //   target.classList.remove("invalido");
  //   target.nextElementSibling.innerText = "";
  // }
  // texto.innerText = event.target.value;
  // document.body.style.backgroundColor = target.value;
  dados[target.name] = target.value;
}
// contatoForm.addEventListener("keyup", handleKeyUp);
contatoForm.addEventListener("change", handleKeyUp);
