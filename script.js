'use strict';

const guessingGame = function(){
    let num = Math.floor(Math.random() * 100) + 1;
        function askToGuess(){
            let guessQuestion = prompt('Угадай число от 1 до 100');
            const guess = Number(guessQuestion); //handling null=0 in an easy way 

            if(guessQuestion === null) {
                alert("Игра окончена");             
                return;                         //exit the prog
            }
            if (isNaN(guess) || guessQuestion.trim() === ''){
                alert('Введи число!');
                return askToGuess();
            }
            if (guess < num) {
                alert( "Загаданное число больше");
                return askToGuess();
             } 
             if (guess > num) {
                alert( "Загаданное число меньше");
                return askToGuess();
             }
        alert("Поздравляю, Вы угадали!!!");

    }
   askToGuess();
}
guessingGame();