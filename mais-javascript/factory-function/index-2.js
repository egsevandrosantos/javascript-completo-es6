function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  const hideElements = function () {
    elements.forEach((item) => {
      item.style.display = "none";
    });
    return this; // Return para poder encadiar métodos, pois senão retorna undefined
  };

  const showElements = function () {
    elements.forEach((item) => {
      item.style.display = "initial";
    });
    return this; // Return para poder encadiar métodos, pois senão retorna undefined
  };

  const on = (onEvent, callback) => {
    elements.forEach((item) => {
      item.addEventListener(onEvent, callback);
    });
    return $$(selectedElements); // Arrow function muda o valor de this
  };

  const addClass = (className) => {
    elements.forEach((item) => {
      item.classList.add(className);
    });
    return $$(selectedElements);
  };

  const removeClass = (className) => {
    elements.forEach((item) => {
      item.classList.remove(className);
    });
    return $$(selectedElements);
  };

  return Object.freeze({
    hideElements,
    showElements,
    on,
    addClass,
    removeClass,
    elements,
  });
}

const btns = $$("button");
btns.on("click", (event) => {
  event.target.classList.remove("active");
  console.log("Click ", event.target, event.currentTarget);
});
btns.addClass("active");
console.log(btns);
