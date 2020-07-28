// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const menuClone = menu.cloneNode(true);
copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const primeiroDtDlFaq = document.querySelector(".faq dl dt");
console.log(primeiroDtDlFaq);

// Selecione o DD referente ao primeiro DT
const ddPrimeiroDtDlFaq = primeiroDtDlFaq.nextElementSibling;
console.log(ddPrimeiroDtDlFaq);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");
faq.outerHTML = animais.outerHTML;
