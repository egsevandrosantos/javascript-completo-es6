function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 0, "Passou 1s");

for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, i); // 1000 * i
}

const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);

function handleClick() {
  // No setTimeout, function mudaria o this para window, mas arrow function deixa como this o botão
  setTimeout(() => {
    console.log(this);
    this.classList.add("ativo");
  }, 1000);
}

let iLoop = 1;
function loop() {
  console.log(`${iLoop * 300}ms`);
  iLoop++;
  if (iLoop > 10) {
    clearInterval(interval);
  }
}
const interval = setInterval(loop, 300);
