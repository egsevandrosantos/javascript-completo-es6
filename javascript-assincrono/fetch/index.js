const doc = fetch("./doc.txt");

doc
  .then((result) => result.text())
  .then((result) => {
    const div = document.createElement("div");
    div.classList.add("conteudo");
    div.innerText = result;
    document.body.appendChild(div);
    console.log(result);
  });

const cep = fetch("https://viacep.com.br/ws/01001000/json/");

// cep
//   .then((result) => result.json())
//   .then((result) => {
//     const div = document.createElement("div");
//     div.classList.add("conteudo");
//     const keys = Object.keys(result);
//     div.innerHTML = "<p>";
//     keys.forEach((key) => {
//       div.innerHTML += `${result[key]}; `;
//     });
//     div.innerHTML += "</p>";
//     document.body.appendChild(div);
// });

// cep.then((result) => {
//   const result2 = result.clone();
//   result.json().then((json) => console.log(json)); // Isso coloca o bodyUsed como true
//   // result.text(); // Não funciona pois em acima já foi convertido, então bodyUsed é true e body.locked is true
//   result2.text().then((text) => console.log(text));
//   console.log(result);
// });

cep.then((result) => {
  console.log(result.status);
  console.log(result.statusText);
  console.log(result.url);
  console.log(result.type);
  result.headers.forEach(console.log);
});

const css = fetch("./style.css");

css
  .then((result) => result.text())
  .then((result) => {
    const style = document.createElement("style");
    style.innerHTML = result;
    document.body.appendChild(style);
  });

const sobre = fetch("./sobre.html");

sobre
  .then((result) => result.text())
  .then((result) => {
    const div = document.createElement("div");
    div.innerHTML = result;
    const titulo = div.querySelector("h1");
    console.log(titulo);
    document.body.appendChild(div);
  });

const imagem = fetch("./imagem.png");

imagem
  .then((resultado) => resultado.blob())
  .then((resultado) => {
    const blobUrl = URL.createObjectURL(resultado);
    console.log(blobUrl);
    const img = document.createElement("img");
    img.src = blobUrl;
    document.body.appendChild(img);
  });
