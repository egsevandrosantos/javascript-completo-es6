import Countdown from "./countdown.js";

const tempoNatal = new Countdown("24 Dec 2020 23:59:59 GMT-0300");
const tempoAnoNovo = new Countdown("01 Jan 2021 00:00:00 GMT-0300");

console.log(tempoNatal);
console.log(tempoNatal.days);
console.log(tempoNatal.hours);
console.log(tempoNatal.minutes);
console.log(tempoNatal.seconds);
console.log(tempoNatal.total);

console.log(tempoAnoNovo.total);
