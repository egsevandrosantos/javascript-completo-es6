import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisFetch = await fetch(url);
      const animaisJson = await animaisFetch.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJson.forEach((item) => {
        const div = createAnimal(item);
        numerosGrid.appendChild(div);
      });
      (() => new AnimaNumeros("[data-numero]", ".numeros"))();
    } catch (error) {
      console.error(error);
    }
  }

  fetchAnimais("../../animaisapi.json");
}
