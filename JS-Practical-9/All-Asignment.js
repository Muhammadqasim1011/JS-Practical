// Assignment 1:
// Task: Write a JavaScript function that takes two numbers as arguments and returns their sum.
// Function Name: addNumbers

function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(23, 43));
console.log(addNumbers(2, 4));

// Assignment 2:
// Task: Write a JavaScript function that takes a string as an argument and returns the string in uppercase.
// Function Name: toUpper

let string1 = "hello";
let string2 = "Harry";

function toUpper(string) {
    return string.toUpperCase();
}
console.log(toUpper(string1));
console.log(toUpper(string2));


// Assignment 3:
// Task: Write a JavaScript function that takes an array of numbers as an argument and returns the average of the numbers.
// Function Name: averageArray


// This function can generate random number of array and push it to the variable and return it.
function generateRNA(length) {
    let randomNumbers = [];
    for (let i = 0; i < length; i++) {
        let number = Math.floor(Math.random() * 100)
        randomNumbers.push(number);
    }
    return randomNumbers;
}
let array = generateRNA(10);

// Averge Function
function averageArray(arr) {
    let average = 0; 
    for (let i = 0; i < arr.length; i++) {
        average += arr[i]/arr.length;
    }
    return average;
}
console.log("The average of array is ",averageArray(array));


// Assignment 4:
// Task: Write a JavaScript function that takes a string as an argument and returns the string with all vowels removed.
// Function Name: removeVowels

let string3 = "Practise Assignments";
let string4 = "string with all vowels removed";
function removeVowels(str) {
    let vowels = "aeiouAEIOU";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

console.log("Remove all the vowels > ",removeVowels(string3));
console.log("Remove all the vowels > ",removeVowels(string4));


// Assignment 5:
// Task: Write a JavaScript function that takes a number as an argument and returns the factorial of that number.
// Function Name: factorial

function calculateFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i
    }
    return factorial;
}

console.log(calculateFactorial(4));
console.log(calculateFactorial(10));


// Assignment 6:
// Task: Write a JavaScript function that takes a string as an argument and returns the string with all letters reversed.
// Function Name: reverseString

let string5 = "Hello";
let string6 = "Pakistan"
function reverseString(str) {
    let reversedString = str.split('').reverse().join('');
    return reversedString;
}

console.log(reverseString(string5));
console.log(reverseString(string6));


// Assignment 7:
// Task: Write a JavaScript function that takes a length of password as an argument and returns the random Password.
// Function Name: genRandomPassword


function genRandomPassword (length) {
    let password = "";
    let charactors = "qwertyuiopasdfghjklzxcvbnm!@#$QWERTYUIOPASDFGHJKLZXCVBNM"

    for (let i = 0; i < length; i++) {
        password += charactors.charAt(Math.floor(Math.random() * charactors.length));
    }
    return password;
}

let randomPassword = genRandomPassword(12);

console.log(randomPassword);

// Assignment 8:
// Question: Write a function named findMax that takes an array of numbers as an argument and returns the largest number.
// Function Name: findMax


function findMax(array) {
    let largestNumber = 0;
    for (let i = 0; i < array.length; i++) {
        if (largestNumber < array[i]) {
            largestNumber = array[i];
        }
    }
    return largestNumber;
}

console.log(array);
console.log(findMax(array));


// Assignment 8:
// Question: Write a function named sumArray that takes an array of numbers and returns the sum of all the elements. Then log the sum.
// Function Name: sumArray


function sumArray(array) {
    let sum = 0;
    for (let index in array){
        sum += array[index];
    }    
    return sum;
}
console.log(sumArray(array));


// Assignment 9:
// Question: Write a function named findLongestWord that takes a sentence (string) as an argument and returns the longest word in the sentence. Then log the longest word.
// Function Name: findLongestWord

let sentence = "hi how are you qasim unbelivable heart";

function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}
console.log(findLongestWord(sentence));


// Assignment 9:
// Question: Write a function named generateDNA that takes a length as an argument and returns a string representing a random DNA sequence (consisting of the characters 'A', 'T', 'C', and 'G'). Then log the sequence.
// Function Name: generateDNA

function generateDNA(length) {   
    let characters = ['A', 'T', 'C', 'G'];
    let sequence = "";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random()* characters.length);
        if (characters[random] === "A") {
            sequence += "AT";
        } 
        if (characters[random] === "T") {
            sequence += "TA";
        } 
        if (characters[random] === "C") {
            sequence += "CG";
        } 
        if (characters[random] === "G") {
            sequence += "GC";
        }
    }
    return sequence;
}
console.log(generateDNA(10));