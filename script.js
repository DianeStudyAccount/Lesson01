"use strict";

const guessingGame = function () {
  let num = Math.floor(Math.random() * 100) + 1;
  let tries = 10;

  function askToGuess() {
    let guessQuestion = prompt("Угадай число от 1 до 100");
    const guess = Number(guessQuestion); //handling null=0 in an easy way

    if (guessQuestion === null) {
      alert("Игра окончена");
      return; //exit the prog
    }
    if (isNaN(guess) || guessQuestion.trim() === "") {
      alert("Введи число!");
      return askToGuess();
    }
    tries--;
    if (tries === 0) {
      const restart = confirm("Попытки закончились, хотите сыграть еще?");
    if (restart) {
      return guessingGame();
    } else {
      alert("Игра окончена.");
      return;
    }
}
    if (guess < num) {
      alert(`Загаданное число больше, осталось попыток ${tries}`);
      return askToGuess();
    }
    if (guess > num) {
      alert(`Загаданное число меньше, осталось попыток ${tries}`);
      return askToGuess();
    }
    const restart = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
    if (restart) {
      return guessingGame();
    } else {
      alert("Игра окончена.");
    }
  }

  askToGuess();
};
guessingGame();
