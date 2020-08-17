// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.
// const sectionsDescricaoAnimais = document.querySelectorAll(
//   ".animais-descricao section"
// );
// sectionsDescricaoAnimais.forEach((item, index) => {
//   if (index % 2 === 0) {
//     item.dataset.anime = "show-down";
//     return;
//   }
//   item.dataset.anime = "show-right";
// });

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)
const tabMenu = document.querySelectorAll('[data-js="tabmenu"] li');
const tabContent = document.querySelectorAll('[data-js="tabcontent"] section');
tabMenu.forEach((item, index) => {
  item.addEventListener("click", function () {
    const section = tabContent[index];
    const classe = section.dataset.anime;
    if (!section.classList.contains(classe)) {
      section.classList.add(classe);
    }
  });
});

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
