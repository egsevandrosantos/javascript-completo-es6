export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animaNumeros() {
    numeros.forEach((item) => {
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

  const observeTarget = document.querySelector(".numeros");
  let observer;

  const handleMutation = (mutation) => {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  };
  observer = new MutationObserver(handleMutation);
  observer.observe(observeTarget, { attributes: true });
}
