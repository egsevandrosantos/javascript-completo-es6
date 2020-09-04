const regexp = /\w+/gi;
const regexp1 = new RegExp("\\w+", "gi");

const frase = "Javascript linguagem 101";
const frase2 = frase.slice();
console.log(frase.replace(regexp, "X"));
console.log(frase.replace(regexp1, "X"));

const regexp2 = /Java/g;
const frase3 = "Javascript e Java linguagem 101";
// console.log(regexp2.lastIndex, regexp2.test(frase3));
// console.log(regexp2.lastIndex, regexp2.test(frase3));
// console.log(regexp2.lastIndex, regexp2.test(frase3));
// console.log(regexp2.lastIndex, regexp2.test(frase3));
// console.log(regexp2.lastIndex);
let i;
for (i = 0; regexp2.test(frase3); i++);
console.log(i);

const frase4 = "Javascript, Typescript, Coffescript, Java";
// const regexp3 = /script/g;
const regexp3 = /\w+script/g;
// console.log(regexp3.exec(frase4));
// console.log(regexp3.exec(frase4));
// console.log(regexp3.exec(frase4));
// console.log(regexp3.exec(frase4));
// console.log(regexp3.exec(frase4));
let regexpResult;
while ((regexpResult = regexp3.exec(frase4))) {
  console.log(regexpResult);
}

console.log(frase4.match(regexp3));

const tags = `
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
`;

const regexp4 = /(?<=<\/?)\w+/g;
// console.log(tags.replace("ul", "div")); Replace apenas um
// console.log(tags.replace(/ul/g, "div")); // Replace todos os casos -> Flag (g)
// console.log(tags.replace(regexp4, "div"));
// console.log(tags.replace(regexp4, "$& ---"));

const regexp5 = /<li/g;
console.log(tags.replace(regexp5, '$& class="active"'));

const emails = `
  empresa@gmail.com
  contato@email.com
  suporte@email.com
`;
const regexp6 = /(\w+@)[\w.]+/g;
console.log(emails.replace(regexp6, "$1gmail.com"));

const emails2 = `
  joao@homail.com.br
  marta@ggmail.com.br
  bruna@oulook.com.br
  andre@origamid.com
`;
const regexp7 = /(\w+@)([\w.]+)/g;
const resultado = emails2.replace(regexp7, function (...args) {
  if (args[2].startsWith("homail")) {
    return `${args[1]}hotmail.com.br`;
  }
  if (args[2].startsWith("ggmail")) {
    return `${args[1]}gmail.com.br`;
  }
  if (args[2].startsWith("oulook")) {
    return `${args[1]}outlook.com.br`;
  }
  return args[0];
});
console.log(resultado);
