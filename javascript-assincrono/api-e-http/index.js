const pokeFetch = fetch("https://pokeapi.co/api/v2/pokemon/");

pokeFetch
  .then((resultado) => resultado.json())
  .then((resultado) => {
    console.log(resultado);
  });

const url = "https://jsonplaceholder.typicode.com/posts";
const options = {
  method: "POST",
  body: JSON.stringify({
    title: "JavaScript",
  }),
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};
const postFetch = fetch(url, options);
postFetch.then((result) => result.json()).then((result) => console.log(result));

const id = 1;
const optionsPut = Object.assign({}, options);
optionsPut.method = "PUT";
const putFetch = fetch(`${url}/${id}`, optionsPut);
putFetch.then((result) => result.json()).then(console.log);

const headFetch = fetch(`${url}/${id}`, { method: "HEAD" });
headFetch.then((result) => {
  console.log(result);
  console.log(result.headers.get("Content-Type"));
  result.headers.forEach(console.log);
});

const googleFetch = fetch("htps://www.google.com");
googleFetch.then((result) => result.text()).then(console.log); // CORS

const urlProxy = "https://cors-anywhere.herokuapp.com/https://www.google.com";
const proxyFecth = fetch(urlProxy);
proxyFecth.then((result) => result.text()).then(console.log); // Burlou CORS
