export default function initFuncionamento() {}

const funcionamento = document.querySelector("[data-semana]");
const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
const horarios = funcionamento.dataset.horario.split(",").map(Number);
const horarioInicial = horarios[0];
const horarioFinal = horarios[1];

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horaAgora = dataAgora.getHours();

if (
  diasSemana.includes(diaAgora) &&
  horarioInicial <= horaAgora &&
  horarioFinal > horaAgora
) {
  funcionamento.classList.add("aberto");
} else {
  funcionamento.classList.add("fechado");
}
