const promessa = new Promise((resolve, reject) => {
  const condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve("Estou pronto");
    }, 1000);
  } else {
    reject(Error("Um erro ocorreu na promisse"));
    // reject("Um erro ocorreu na promise");
  }
});

promessa
  .then((resolucao) => {
    console.log(resolucao);
    return resolucao + " retorno 2";
  })
  .then((resolucao) => console.log(resolucao))
  .catch((erro) => console.log(erro));
// .catch((erro) => console.log(erro)); // Não é possível encadear catch

promessa
  .then(
    (resolve) => {
      console.log("Aqui");
      console.log(resolve);
    },
    (reject) => {
      console.log(reject);
    }
  )
  .finally(() => {
    console.log("Finally");
  });

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ id: 1 });
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ id: 1, nome: "Evandro", sobrenome: "Santos" });
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]); // É ativada quando todas as promises é resolved ou quando a primeira é reject

carregouTudo.then((resultado) => {
  console.log(resultado);
});

const carregouTudo2 = Promise.race([login, dados]); // É ativada quanto a primeira promise é resolved ou reject

carregouTudo2.then((resultado) => {
  console.log(resultado);
});
