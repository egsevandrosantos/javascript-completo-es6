// Crie uma função que verifique
// corretamente o tipo de dado
function verificarTipo(dado) {
  return Object.prototype.toString.call(dado);
}
console.log(verificarTipo("Oi"));
console.log(verificarTipo([]));
console.log(verificarTipo({}));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  },
});
console.log(quadrado);
quadrado.lados = 5;
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};
Object.freeze(configuracao);
console.log(configuracao);
configuracao.width = 999;
configuracao["z-index"] = 1;
delete configuracao.background;
console.log(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
