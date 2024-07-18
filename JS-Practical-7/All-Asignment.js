// Write a JavaScript program that asks the user for a string and an index, and then displays the character at that index in the string using the javascript method. 3 marks

let str = "Pakistan, officially the Islamic Republic of Pakistan";
let index = 19;

if (index >= 0 && index < str.length) {
    console.log("The character at index " + index + " is: " + str.charAt(index));
} else {
    console.log("Index out of range");
}


// Write a JavaScript program that asks the user for a string, a substring to search for, and a replacement substring, and then displays the modified string with all occurrences of the search substring replaced using the replace() method. 3 marks

let originalString = "Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million. Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia.";
let modifiedString = originalString.replace(/Pakistan/g, "India");

console.log("\nThe modified string is: " + modifiedString);

// Method 2:

let originalString2 = "Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million. Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia.";
let searchSubstring2 = "Pakistan";
let replacementSubstring2 = "India";

// Create a dynamic regular expression with the global flag using the RegExp constructor
let regex = new RegExp(searchSubstring2, 'g');
let modifiedString2 = originalString2.replace(regex, replacementSubstring2);

console.log("\nThe modified string with method 2 is: " + modifiedString2);


// Write a JavaScript program that asks the user for a number and then displays the rounded version of the number to the nearest whole number using the round() method. 3 marks

let number = 23.7;

let roundedNumber = Math.round(number);
console.log("\nThe rounded number is: " + roundedNumber);


// Write a JavaScript program that asks the user for a number and then displays the ceiling of the number using the ceil() method. For example, if the user inputs 4.2, the program should display 5. 3 marks

let ceilingNumber = Math.ceil(number);
console.log("The ceiling number is: " + ceilingNumber);


// Write a JavaScript program that asks the user for a number and then displays the flooring of the number using the floor() method. For example, if the user inputs 8.6, the program should display 8. 3 marks

let floorNumber = Math.floor(number);
console.log("The floor number is: " + floorNumber);