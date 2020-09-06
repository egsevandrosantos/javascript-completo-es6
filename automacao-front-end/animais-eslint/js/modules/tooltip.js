export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function criarTooltipBox(element) {
    const text = element.getAttribute("aria-label");
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseMove = {
    tooltipBox: null,
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    // Para criar um objeto como callback, deve ter o método handleEvent
    tooltipBox: null,
    element: null,
    handleEvent() {
      if (this.tooltipBox && this.element) {
        this.tooltipBox.remove();
        this.element.removeEventListener("mouseleave", onMouseLeave);
        this.element.removeEventListener("mousemove", onMouseMove);
      }
    },
  };

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = `${event.pageY}px`;
    tooltipBox.style.left = `${event.pageX}px`;

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseMove.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
