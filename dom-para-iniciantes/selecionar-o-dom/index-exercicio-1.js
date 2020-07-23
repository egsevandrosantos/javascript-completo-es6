// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensImagem = document.querySelectorAll("img[src^='./img/imagem']");
console.log(imagensImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("a[href^='#']");
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2AnimaisDescricao = document.querySelector(
  ".animais-descricao h2"
);
console.log(primeiroH2AnimaisDescricao);

// Selecione o último p do site
const todosOsP = document.querySelectorAll("p");
const ultimoP = todosOsP[todosOsP.length - 1];
console.log(ultimoP);
