var videogames = ["Switch", "PS4", "XBox"];
var ultimoItem = videogames.pop();
videogames.push("3DS");

console.log("For");
for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log("While");
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

console.log("For videogames");
var videogames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0, l = videogames.length; i < l; i++) {
  console.log(videogames[i]);
  if (videogames[i] === "PS4") {
    break;
  }
}

console.log("For videogames 2");
for (var i = 0, l = videogames.length; i < l; i++) {
  if (videogames[i] === "PS4") {
    continue;
  }
  console.log(videogames[i]);
}

console.log("Foreach");
var frutas = ["Banana", "Pera", "Maçã", "Abacaxi", "Uva"];
frutas.forEach(function (item, index, array) {
  console.log(`${item} - ${index} - ${array}`);
});
