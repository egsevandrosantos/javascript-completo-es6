const item1 = 1;

const funcao1 = () => {
  const item2 = 2;

  const funcao2 = () => {
    const item3 = 3;
    console.log(item1, item2, item3);
  };

  funcao2();
  console.log(item1, item2);
};

funcao1();
console.log(item1);

function contagem() {
  let contagem = 0;
  return function incremento() {
    contagem++;
    console.log(contagem);
  };
}

const incremento = contagem();
incremento();
incremento();
incremento();
