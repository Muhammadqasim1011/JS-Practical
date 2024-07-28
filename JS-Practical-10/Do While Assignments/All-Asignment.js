// DO While Loop
// Assignment 1: Print Numbers
// Write a JavaScript program that uses a do-while loop to print the numbers from 1 to 10.

function printFirstNumbers(num) {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= num);
}

// printFirstNumbers(10);

// Assignment 2: Sum of Numbers
// Write a JavaScript program that uses a do-while loop to calculate the sum of numbers from 1 to 10.

function sumOfFirstNumbers(num) {
  let result = 0;
  let i = 1;
  do {
    result += i;
    i++;
  } while (i <= num);
  return result;
}

// console.log(sumOfFirstNumbers(20));


// Assignment 3: Guessing Game
// Write a JavaScript program that uses a do-while loop to play a guessing game, where the user has to guess a randomly generated number between 1 and 100.

function guessingGame() {
    let playAgain = true;
    let gamesPlayed = 0;
    let bestScore = 0;

    do {
        gamesPlayed++;

        let guess = Math.ceil(Math.random() * 100);
        let attempts = 10;
        let gameEnded = false;

        do {
            let userInput = Number(prompt(`Enter your guess (1 - 100}). You have ${attempts} attempts left:`));

            if (attempts === 0) {
                alert(`Out of moves. The correct number was ${guess}. Try again!`);
                gameEnded = true;
            } else if (guess === userInput) {
                let totalScore = attempts * 10;
                if (totalScore > bestScore) {
                    bestScore = totalScore;
                }
                alert(`Congratulations! You guessed the correct number ${guess}. Your score is ${totalScore}. Your Best score is ${bestScore}.`);
                gameEnded = true;
            } else if (guess < userInput) {
                attempts--;
                alert(`Your guess is too high. You have ${attempts} attempts left.`);
            } else if (guess > userInput) {
                attempts--;
                alert(`Your guess is too low. You have ${attempts} attempts left.`);
            }
        } while (!gameEnded) 

        playAgain = confirm(`Do you want to play again? You have played ${gamesPlayed} games. Your best score is ${bestScore}.`);
    }while (playAgain) 

    alert(`Thank you for playing! You played ${gamesPlayed} games. Your best score was ${bestScore}.`);
}

// This game works on the browser. just call th function and open the index.html file in browser.

// guessingGame();

// Assignment 4: Factorial
// Write a JavaScript program that uses a do-while loop to calculate the factorial of a given number.

function factorial (num) {
    let result = 1;
    let i = 2;
    do {
        result *= i;
        i++
    } while (i <= num)
    return result
}

// console.log(factorial(5));

// Assignment 5: Multiplication Table
// Write a JavaScript program that uses a do-while loop to print the multiplication table for a given number (e.g., 5).

function generateMultiplicationTable (num) {
    let i = 1;
    let result = 1;
    do {
        result = num * i;
        console.log(`${num} X ${i} = ${result}`);
        i++;
    } while (i <= 10);
}

// generateMultiplicationTable(9);