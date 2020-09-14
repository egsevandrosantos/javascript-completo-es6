// import $ from "jquery";
// import _ from "lodash";
import ScrollSuave from "./modules/scroll-suave.js";
import initScrollAnimacao from "./modules/scroll-animacao.js";
import AccordionList from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

(() => new ScrollSuave("a[href^='#']"))();
initScrollAnimacao();
(() => new AccordionList('[data-js="accordion"] dt'))();
(() =>
  new TabNav('[data-js="tabmenu"] li', '[data-js="tabcontent"] section'))();
(() =>
  new Modal(
    '[data-modal="abrir"]',
    '[data-modal="fechar"]',
    '[data-modal="container"]'
  ))();
(() => new Tooltip("[data-tooltip]"))();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

// $("nav").hide();
// const nav = $("nav");
// console.log(nav);
// const diff = _.difference(["Banana", "Uva"], ["Banana", "Morango"]);
// console.log(diff);
