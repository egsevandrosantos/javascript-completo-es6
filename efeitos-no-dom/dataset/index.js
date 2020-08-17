const h1 = document.querySelector("h1");
console.log(h1, Object.prototype.toString.call(h1));

console.log(h1.dataset);

const div = document.querySelector("div");
console.log(div.dataset);
div.dataset.height = 1000;
console.log(div.dataset);
delete div.dataset.height;
console.log(div.dataset);
// document.querySelector("[data-cor]");
// document.querySelector("[data-cor="azul"]");
// document.querySelector("[data-cor^="azul"]");
