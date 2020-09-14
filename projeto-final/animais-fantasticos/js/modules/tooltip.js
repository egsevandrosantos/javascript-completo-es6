export default class Tooltip {
  constructor(tooltip) {
    this.onMouseOver = this.onMouseOver.bind(this);
    this.criarFuncoesObjeto();
    this.tooltips = document.querySelectorAll(tooltip);
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  static criarTooltipBox(element) {
    const text = element.getAttribute("aria-label");
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  createOnMouseMove() {
    this.onMouseMove = {
      tooltipBox: null,
      handleEvent({ pageY, pageX }) {
        this.tooltipBox.style.top = `${pageY + 20}px`;
        if (pageX + 240 > window.innerWidth) {
          this.tooltipBox.style.left = `${pageX - 150}px`;
        } else {
          this.tooltipBox.style.left = `${pageX + 20}px`;
        }
      },
    };
  }

  createOnMouseLeave() {
    this.onMouseLeave = {
      // Para criar um objeto como callback, deve ter o método handleEvent
      tooltipBox: null,
      element: null,
      handleEvent() {
        if (this.tooltipBox && this.element) {
          this.tooltipBox.remove();
          this.element.removeEventListener("mouseleave", this.onMouseLeave);
          this.element.removeEventListener("mousemove", this.onMouseMove);
        }
      },
    };
  }

  criarFuncoesObjeto() {
    this.createOnMouseMove();
    this.createOnMouseLeave();
  }

  onMouseOver({ currentTarget, pageY, pageX }) {
    const tooltipBox = Tooltip.criarTooltipBox(currentTarget);
    tooltipBox.style.top = `${pageY}px`;
    tooltipBox.style.left = `${pageX}px`;

    this.onMouseLeave.tooltipBox = tooltipBox;
    this.onMouseMove.tooltipBox = tooltipBox;
    this.onMouseLeave.element = currentTarget;
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }
}
