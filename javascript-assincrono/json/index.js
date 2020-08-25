const dadosFetch = fetch("./dados.json");

// dadosFetch
//   .then((resultado) => resultado.json())
//   .then((resultado) => {
//     resultado.forEach((item) => {
//       console.log(item.aula);
//     });
//   });

dadosFetch
  .then((resultado) => resultado.text())
  .then((resultado) => {
    const json = JSON.parse(resultado);
    console.log(json);
  });

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

console.log(JSON.stringify(configuracoes));

localStorage.configuracoes = JSON.stringify(configuracoes);

console.log(localStorage.configuracoes, typeof localStorage.configuracoes);
console.log(JSON.parse(localStorage.configuracoes));
