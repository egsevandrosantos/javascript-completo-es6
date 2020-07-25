const imgs = document.querySelectorAll("img");
console.log(imgs);

imgs.forEach(function (item, index, array) {
  // console.log(item, index, array);
});

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

console.log(titulos, titulosArray);

titulosArray.forEach(function (item) {
  console.log(item);
});

imgs.forEach((item, index, array) => {
  console.log(item, index, array);
});
