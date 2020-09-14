export default class AnimaNumeros {
  constructor(numeros, observeTarget) {
    this.handleMutation = this.handleMutation.bind(this);
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget);
    if (this.numeros && this.observeTarget) {
      this.observer = new MutationObserver(this.handleMutation);
      this.observer.observe(this.observeTarget, { attributes: true });
    }
  }

  animaNumeros() {
    this.numeros.forEach((item) => {
      const total = +item.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        item.innerText = start;
        if (start > total) {
          item.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
}
