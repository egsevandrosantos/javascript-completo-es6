// async function puxarDados() {
//   const dadosFetch = fetch("./dados.json");
//   const jsonFetch = dadosFetch
//     .then((result) => result.json())
//     .then((result) => result)
//     .catch((error) => console.log(error));

//   let dadosFetchAwait, jsonFetchAwait;
//   try {
//     dadosFetchAwait = await fetch("./dados.json");
//     jsonFetchAwait = await dadosFetchAwait.json();
//   } catch (error) {
//     console.log(error);
//   }

//   console.log(dadosFetch, dadosFetchAwait);
//   console.log(jsonFetch, jsonFetchAwait);
// }

async function puxarDados() {
  const dadosFetch = fetch("./dados.json");
  const clientesFetch = fetch("./clientes.json");

  // dadosFetch é Promise mas await dadosFetch é Response
  // await só funciona em Promise
  const dadosJson = await (await dadosFetch).json();
  const clientesJson = await (await clientesFetch).json();
  console.log(dadosJson, clientesJson);
}

puxarDados();

async function asyncSemPromise() {
  // await é ignorado pois setTimeout não é promise
  await setTimeout(() => {
    console.log("timeout");
  }, 1000);
  console.log("após timeout");
}

asyncSemPromise();

async function asyncComPromise() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("timeout 2");
      resolve();
    }, 1000);
  });
  console.log("após timeout 2");
}

asyncComPromise();

// Then ou Async
// É apenas questão de sintaxe limpa
