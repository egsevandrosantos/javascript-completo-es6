// import $ from "jquery";
// import _ from "lodash";
import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnimacao from "./modules/scroll-animacao.js";
import AccordionList from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

(() => new ScrollSuave("a[href^='#']"))();
(() => new ScrollAnimacao('[data-js="scroll"]'))();
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
(() => new DropdownMenu("[data-dropdown]"))();
(() => new MenuMobile('[data-js="button-menu"]', "#menu"))();
(() => new Funcionamento("[data-semana]"))();
initFetchAnimais();
initFetchBitcoin();

// $("nav").hide();
// const nav = $("nav");
// console.log(nav);
// const diff = _.difference(["Banana", "Uva"], ["Banana", "Morango"]);
// console.log(diff);
