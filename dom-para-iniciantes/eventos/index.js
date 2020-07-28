const img = document.querySelector("img");
console.log(img);
const callback = (event) => {
  console.log("img", event);
};
img.addEventListener("click", callback);

const animaisLista = document.querySelector(".animais-lista");
function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
  console.log(this);
}
animaisLista.addEventListener("click", callbackLista);
console.log(animaisLista);

const linkExterno = document.querySelector("a[href^='http']");
console.log(linkExterno);
linkExterno.addEventListener("click", handleLinkExterno);
function handleLinkExterno(event) {
  event.preventDefault();
  console.log("Clicou link");
  console.log(event);
}

const h1 = document.querySelector("h1");
h1.addEventListener("click", handleEventH1);
h1.addEventListener("mouseenter", handleEventH1);
h1.addEventListener("mousemove", handleEventH1);
function handleEventH1(event) {
  console.log(event.type, event);
}

window.addEventListener("scroll", handleEventH1);
window.addEventListener("resize", handleEventH1);

function handleKeyboard(event) {
  if (event.key === "f") {
    document.body.classList.toggle("fullscreen");
  }
}
window.addEventListener("keydown", handleKeyboard);

const imgs = document.querySelectorAll("img");
imgs.forEach((item) => {
  item.addEventListener("click", handleImg);
});
function handleImg(event) {
  console.log(event.target);
}
