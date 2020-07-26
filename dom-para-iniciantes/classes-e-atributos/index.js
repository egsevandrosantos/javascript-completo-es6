const menu = document.querySelector(".menu");
console.log(menu);
console.log(menu.classList);

menu.classList.add("ativo", "teste");
menu.classList.toggle("azul");
console.log(menu.classList);
menu.classList.toggle("azul");
console.log(menu.classList);
menu.classList.remove("ativo");
console.log(menu.classList);
if (menu.classList.contains("teste")) {
  menu.classList.add("azul");
}
if (menu.classList.contains("vermelho")) {
  menu.classList.add("e-mentira");
}
console.log(menu.classList);

console.log(menu.className);
menu.className += " vermelho";
console.log(menu.className);

const animais = document.querySelector(".animais");
console.log(animais.attributes);
console.log(animais.attributes[0]);
console.log(animais.attributes.id);
console.log(animais.attributes["data-texto"]);

const img = document.querySelector("img");
console.log(img.getAttribute("src"));
console.log(img.getAttribute("alt"));
img.setAttribute("alt", "Meu alt JS");
console.log(img.getAttribute("alt"));
console.log(img.hasAttribute("alt"));
img.removeAttribute("alt");
console.log(img.getAttribute("alt"));
console.log(img.hasAttribute("alt"));

const carro = {
  portas: 4,
  andar: (km) => {
    console.log(`Andou ${km}`);
  },
};
