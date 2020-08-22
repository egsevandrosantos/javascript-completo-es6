export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  handleOutsideClick.html = html;
  handleOutsideClick.element = element;
  handleOutsideClick.callback = callback;
  handleOutsideClick.events = events;
  const eventListener = Object.assign({}, handleOutsideClick);
  events.forEach((itemEvent) => {
    setTimeout(() => {
      if (element.classList.contains("ativo")) {
        html.addEventListener(itemEvent, eventListener); // Já ativa pelo bubble
      }
    });
  });
}

const handleOutsideClick = {
  html: null,
  element: null,
  callback: null,
  events: null,
  handleEvent(event) {
    if (!this.element.contains(event.target)) {
      this.callback();
      this.events.forEach((itemEvent) => {
        this.html.removeEventListener(itemEvent, this);
      });
    }
  },
};
