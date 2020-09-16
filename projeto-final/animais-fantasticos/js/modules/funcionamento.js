export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    const horarios = this.funcionamento.dataset.horario.split(",").map(Number);
    [this.horarioInicial, this.horarioFinal] = horarios;

    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
    this.init();
  }

  init() {
    if (
      this.diasSemana.includes(this.diaAgora) &&
      this.horarioInicial <= this.horaAgora &&
      this.horarioFinal > this.horaAgora
    ) {
      this.funcionamento.classList.add("aberto");
    } else {
      this.funcionamento.classList.add("fechado");
    }
  }
}
