// Mostre no console cada parágrado do site
const ps = document.querySelectorAll("p");
console.log(ps);
ps.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
ps.forEach((item) => console.log(item.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

// imgs.forEach(item, index => {
//   console.log(item, index);
// });
imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
