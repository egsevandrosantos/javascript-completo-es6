// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const body = document.body;
setInterval(() => {
  if (
    body.style.backgroundColor === "red" ||
    body.style.backgroundColor === ""
  ) {
    body.style.backgroundColor = "blue";
  } else {
    body.style.backgroundColor = "red";
  }
}, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
let horas = 0,
  minutos = 0,
  segundos = 0;
let intervalCronometro;
const textoCronometro = document.querySelector("[data-texto]");
const btnIniciarCronometro = document.querySelector("[data-iniciar]");
const btnPausarCronometro = document.querySelector("[data-pausar]");

function iniciarCronometro() {
  if (!intervalCronometro) {
    intervalCronometro = setInterval(() => {
      segundos++;
      if (segundos > 59) {
        minutos++;
        segundos = 0;
      }
      if (minutos > 59) {
        horas++;
        minutos = 0;
      }
      atualizarValorCronometro();
    }, 1000);
  }
}

function pausarCronometro() {
  if (intervalCronometro) {
    clearInterval(intervalCronometro);
    intervalCronometro = undefined;
  }
}

function resetarCronometro() {
  horas = 0;
  minutos = 0;
  segundos = 0;
  atualizarValorCronometro();
}

function atualizarValorCronometro() {
  textoCronometro.innerText = `${horas
    .toString()
    .padStart(2, "0")}:${minutos
    .toString()
    .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
}

btnIniciarCronometro.addEventListener("click", iniciarCronometro);
btnPausarCronometro.addEventListener("click", pausarCronometro);
btnPausarCronometro.addEventListener("dblclick", resetarCronometro);
