// nomeie 3 propriedades ou métodos de strings
var nome = "Evandro";
var nomeCompleto = nome.concat(" Santos");
var letraANoNome = nome.indexOf("a");
var nome3Vezes = nome.repeat(3);
console.log(nome, nomeCompleto, letraANoNome, nome3Vezes);

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
console.log(btn.classList);
console.log(btn.attributes);
console.log(btn.className);
console.log(btn.children);
console.log(btn.firstChild);

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
var btnCopy = document.querySelector("#btn_copy");
btnCopy.addEventListener("click", function () {
  document.querySelector("#txt_copy").select();
  document.execCommand("copy");
});
