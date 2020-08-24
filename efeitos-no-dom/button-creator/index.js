const form = document.forms.controles;
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

const handleStyle = {
  el: btn,
  texto(value) {
    this.el.innerText = value;
  },
  color(value) {
    this.el.style.color = value;
  },
  backgroundColor(value) {
    this.el.style.backgroundColor = value;
  },
  height(value) {
    this.el.style.height = value + "px";
  },
  width(value) {
    this.el.style.width = value + "px";
  },
  border(value) {
    this.el.style.border = value;
  },
  borderRadius(value) {
    this.el.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.el.style.fontFamily = value;
  },
  fontSize(value) {
    this.el.style.fontSize = value + "rem";
  },
};

function handleChange(event) {
  const target = event.target;
  const name = target.name;
  const value = target.value;
  handleStyle[name](value);
  showCss();
}

form.addEventListener("change", handleChange);

function showCss() {
  const arrStyleCss = btn.style.cssText
    .split(";")
    .filter((item) => item.length > 0)
    .map((item) => `<span>${item.trim()};</span>`);
  cssText.innerHTML = arrStyleCss.join("");
}
