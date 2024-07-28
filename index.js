const prompt = require("prompt-sync")();
let randomNum = Math.floor(Math.random() * 100 + 1);
let guessNum;
let chances = 0;
do {
  guessNum = prompt("enter a number between 1 to 100: ");
  guessNum = Number.parseInt(guessNum);

  if (randomNum === guessNum) {
    console.log("you guessed right");
  } else if (guessNum > 100 || guessNum < 0) {
    console.log("please enter a number between 1 to 100");
  } else if (guessNum > randomNum) {
    console.log("you guessed a greater number");
  } else if (guessNum < randomNum) {
    console.log("you have guessed a smaller number");
  }
  chances++;
} while (randomNum != guessNum);
console.log(`you have tried ${chances} times`);
console.log(`you have scored: ${100 - chances} points`);