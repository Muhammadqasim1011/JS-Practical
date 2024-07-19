// Generate a random number between 1 and 100 and print it to the console. 4 marks
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log("Random number between 1 and 100: " + randomNumber);

// Create a program that generates a random number between two user-inputted numbers. 4 marks
let min = 20;
let max = 50;
let strikRandomNumber = Math.floor(Math.random() * (max - min) + min);
console.log("\nRandom number between " + min + " and " + max + ": " + strikRandomNumber);

// Simulate a coin toss by generating a random number (0 or 1) and print "Heads" or "Tails" accordingly. 4 marks
let coin = Math.floor(Math.random() * 2);
if (coin === 0) {
    console.log("\nCoin toss result: Heads", "\n");
} else {
    console.log("\nCoin toss result: Tails", "\n");
}


// RANDOM PASSWORD GENERATOR PROGRAM 4 marks
let passwordLength = 8;
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&';
let password = '';
for (let index = 0; index < passwordLength; index++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(password, "\n");


// Convert the string "123" to an integer and print its value. 4 marks
let string = "123";
let number = parseInt(string);
console.log(typeof number);
console.log(number, "\n");

// Convert the string "123.45" to a decimal and print its value. 4 marks
let string2 = "123.45";
let number2 = parseFloat(string2);
console.log(typeof number2);
console.log(number2, "\n");

// Write a program that takes a string input and converts it to an integer or decimal (depending on the input). 4 marks
let string3 = "12345";
let number3;
if (string3.includes(".")) {
    number3 = parseFloat(string3);
} else {
    number3 = parseInt(string3);
}
console.log(typeof number3);
console.log(number3, "\n");


// Convert the string "123" to a number and print its value. 4 marks
let string4 = "123";
let number4 = Number(string4);
console.log(typeof number4);
console.log(number4, "\n");


// Convert the number 123 to a string and print its value. 4 marks
let number5 = 123;
let string5 = number5.toString();
console.log(typeof string5);
console.log(string5, "\n");

// Write a program that takes a input (string or number) and converts it to the opposite type (number or string). 4 marks
let input = 123;
let output;
if (typeof input === "string") {
    output = Number(input);
} else {
    output = input.toString();
}
console.log(typeof output);
console.log(output, "\n");

// Use toFixed() to format the number 123.45678 to two decimal places. 4marks
let number6 = 123.45678;
console.log(number6.toFixed(2), "\n");

// Use toFixed() to format the number 123.45678 to four decimal places. 4 marks
console.log(number6.toFixed(4), "\n");

// Write a program that takes a number input and formats it to a specified number of decimal places using toFixed(). 4 marks
let number7 = 123.45678;
let decimalCount = 10;
console.log(number7.toFixed(decimalCount), "\n");

// Print the current date and time to the console. 4 marks
let date = new Date();
console.log(date +"\n");

// Print the current date and time in a specific format (e.g. "YYYY-MM-DD HH:mm:ss"). 4 marks
let currentDateTimeFormat = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
console.log(currentDateTimeFormat + "\n");

// Write a program that returns the current date and time as a string. 4 marks
let dateString = date.toString();
console.log(typeof dateString);
console.log("Current date and time as string: " + dateString + "\n");

// AGE CALCULATOR BY BIRTHDATE 4 marks
let birthDate = new Date("2000-01-01");
let currentDate = new Date();
let age = currentDate.getFullYear() - birthDate.getFullYear();
let monthDiff = currentDate.getMonth() - birthDate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && currentDateTime.getDate() < birthDate.getDate())) {
    age--;
}
console.log("Your age is: " + age + "\n");

// Extract the year from the current date and print it to the console. 4 marks
console.log("Extracted year: " + currentDate.getFullYear(), "\n");

// Extract the month from the current date and print it to the console. 4 marks
console.log("Extracted month: " + currentDate.getMonth(), "\n");

// Write a program that takes a date input and extracts the day, month, and year as separate values. 4 marks
let dateInput = new Date("2000-01-01");
let extractedDay = dateInput.getDate();
let extractedMonth = dateInput.getMonth() + 1;
let extractedYear = dateInput.getFullYear();

console.log("Extracted day: " + extractedDay);
console.log("Extracted month: " + extractedMonth);
console.log("Extracted year: " + extractedYear + "\n");

// Create a Date object for a specific date and time (e.g. January 1, 2022 12:00:00).  4 marks

let specificDate = new Date('2022-01-01T12:00:00');
console.log("Specific date and time: " + specificDate + "\n");

// Create a Date object for a specific date and time using user-inputted values. 

// let userYear = parseInt(prompt("Enter year:"));
// let userMonth = parseInt(prompt("Enter month (1-12):")) - 1;
// let userDay = parseInt(prompt("Enter day:"));
// let userHour = parseInt(prompt("Enter hour (0-23):"));
// let userMinute = parseInt(prompt("Enter minute (0-59):"));
// let userSecond = parseInt(prompt("Enter second (0-59):"));

let userYear = 2044
let userMonth = 12- 1;
let userDay = 2;
let userHour = 3;
let userMinute = 32;
let userSecond = 43;

let userDate = new Date(userYear, userMonth, userDay, userHour, userMinute, userSecond);
console.log("User specified date and time: " + userDate + "\n");


// Write a program that takes a string input (e.g. "2022-01-01 12:00:00") and creates a Date object from it. 4 marks

let dateString2 = "2022-01-01 12:00:00";
let dateObject2 = new Date(dateString2);
console.log("Date object: " + dateObject2 + "\n");

// Add one day to the current date and print the new date. 4 marks
let currentDateTime = new Date(); 
let tomorrow = new Date(currentDateTime);
tomorrow.setDate(tomorrow.getDate() + 1);
console.log("Tomorrow's date: " + tomorrow + "\n");


// // Subtract one hour from the current time and print the new time. 4 marks
let oneHourAgo = new Date(currentDateTime);
oneHourAgo.setHours(oneHourAgo.getHours() - 1);
console.log("One hour ago: " + oneHourAgo + "\n");

// Write a program that takes a Date object and adds or subtracts a specified number of days, hours, or minutes. 4 marks

let nowDateTime = new Date();
console.log("Current date and time: " + nowDateTime);

let adjustDays = 30;
let adjustHours = 13;
let adjustMinutes = 40;

nowDateTime.setDate(nowDateTime.getDay() + adjustDays)
nowDateTime.setHours(nowDateTime.getHours() + adjustHours)
nowDateTime.setMinutes(nowDateTime.getMinutes() + adjustMinutes)

console.log("Adjusted date and time: " + nowDateTime + "\n");


// Schedule Appointment: Write a JavaScript program to schedule an appointment for a specific date and time. 4 marks

// let appointmentDate = new Date(prompt("Enter the appointment date and time (YYYY-MM-DDTHH:mm:ss):"));
let appointmentDate = new Date("2024-07-19T10:19:30");
console.log("Appointment scheduled for: " + appointmentDate + "\n");



// Countdown Timer: Write a JavaScript program to create a countdown timer that displays the remaining time until a specific date and time. 4 marks

// let countdownDate = new Date(prompt("Enter the target date and time (YYYY-MM-DDTHH:mm:ss):"));
let countdownDate = new Date("2024-07-19T10:19:30");
// change the upper time in date object to start the countdown

let timerInterval = setInterval(() => {
    let now = new Date();
    let timeDiff = countdownDate - now;
    if (timeDiff <= 0) {
        clearInterval(timerInterval);
        console.log("Countdown finished!");
    } else {
        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        console.log(`Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    }
}, 1000);
