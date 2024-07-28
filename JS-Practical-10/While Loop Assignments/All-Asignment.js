// While Loop
// Assignment 1: Fibonacci Sequence (imp)
// Write a JavaScript program that uses a while loop to print the first 10 numbers in the Fibonacci sequence.
// F(n)=F(n−1)+F(n−2)  This is the formula for the fibonachi sequence
function generateFibonacciSequence(num) {
    let n = 2;
    let fibonacciSequence = [0, 1];
    while (n <= num) {
        fibonacciSequence[n] = fibonacciSequence[n - 1] + fibonacciSequence[n - 2];
        n++;
    }
    return fibonacciSequence;
}
// console.log(generateFibonacciSequence(10));

// Assignment 2: Guessing Game (imp)
// Write a JavaScript program that uses a while loop to play a guessing game, where the user has to guess a randomly generated number between 1 and 100.

function guessingGame() {
    let playAgain = true;
    let gamesPlayed = 0;
    let bestScore = 0;

    while (playAgain) {
        gamesPlayed++;

        let guess = Math.ceil(Math.random() * 100);
        let attempts = 10;
        let gameEnded = false;

        while (!gameEnded) {
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
        }

        playAgain = confirm(`Do you want to play again? You have played ${gamesPlayed} games. Your best score is ${bestScore}.`);
    }

    alert(`Thank you for playing! You played ${gamesPlayed} games. Your best score was ${bestScore}.`);
}

// This game works on the browser. just call th function and open the index.html file in browser.

// guessingGame();


// Assignment 3: Reverse String
// Write a JavaScript program that uses a while loop to reverse a given string.

function reverseString(str) {
    let reversedString = "";
    string = str;
    let i = string.length - 1;
    while (i >= 0) {
        reversedString += string[i];
        i--;
    }
    return reversedString;
}

// console.log(reverseString("Hello"));
// console.log(reverseString("Pakistan"));

// Assignment 4: Find Prime Numbers
// Write a JavaScript program that uses a while loop to find all prime numbers between 1 and 100.

function primeNumbers(num) {
    let primeNumbersArray = [];
    let i = 2;
    while (i <= num) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbersArray.push(i);
        }
        i++;
    }
    return primeNumbersArray;
}

// console.log(primeNumbers(100));

// Assignment 5: Power of a Number
// Write a JavaScript program that uses a while loop to calculate the power of a given number (e.g., 2^3 = 8).

function calculatePower (num, pow) {
    let result = 1;
    let i = 0;
    while (i < pow) {
        result *= num;
        i++;
    }
    return result;
}

// console.log(calculatePower(2,3));

// Assignment 6: Palindrome Checker (imp)
// Write a JavaScript program that uses a while loop to check if a given string is a palindrome (reads the same backward and forward).


function isPalindrome2(str) {
    function reverseString(str2) {
        let reversedString = "";
        let i = str2.length - 1;
        while (i >= 0) {
            reversedString += str2[i];
            i--;
        }
        return reversedString;
    }
    return str === reverseString(str);
}

// console.log(isPalindrome2("hello"));
// console.log(isPalindrome2("madam"));

// Method# 2
function isPalindrome(str) {
    let reversedString = str.split('').reverse().join('');
    return str === reversedString;
}

// console.log(isPalindrome("hello"));
// console.log(isPalindrome2("madam"));
