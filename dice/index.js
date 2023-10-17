var randomNumber1 = Math.random();
randomNumber1 = Math.floor(Math.random() * 19) + 1;
var randomDice = "page" + randomNumber1 + ".png";
var randomDiceSource = "image/" + randomDice;
document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource);
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(Math.random() * 19) + 1;
var randomDice1 = "page" + randomNumber2 + ".png";
var randomDiceSource1 = "image/" + randomDice1;
document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource1);
/*if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 won!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "player 2 won!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}*/
