// Task-1: Remove extra spaces from the following string: " Hello World " ?

let string1 = " Hello World ";
string1 = string1.trim();
console.log(string1);

// Task-2: Get the substring starting from index 5 to 10 from the string: "Hello World"? 

let string2 = "Hello World"
let substring = string2.substring(5, 10);
console.log(substring);

// Task-3: Extract the first 5 characters from the string: "Hello World"?

let string3 = "Hello World";
let extract = string3.substr(0, 5);
console.log(extract);

// Task-4: Split the string "hello-world" into an array using the hyphen as a separator ?

let string4 = "hello-world";
let splitArray = string4.split('-');
console.log(splitArray);

// Task-5:Join the array ["hello", "world"] into a string with a space separator

let array = ["hello", "world"];
let joinString = array.join(' ');
console.log(joinString);

// Task- 6: Find the index of the character "o" in the string: "Hello World"

let string6 = "Hello World";
let index = string6.indexOf('o');
console.log(index);

// Tassk-7: Find the last index of the substring "World" in the string: "Hello World World"

let string7 = "Hello World World";
let lastIndex = string7.lastIndexOf('World');
console.log(lastIndex);

// Task-8: Check if the string "World" starts with "Wor"

let string8 = "World";
let check = string8.startsWith('Wor');
console.log(check);

// Task-9: Check if the string "Hello World" ends with "World"

let string9 = "Hello World";
let check1 = string9.endsWith('World');
console.log(check1);

// Task-10: Check if the string "Hello" includes the character "o"

let string10 = "Hello";
let check2 = string10.includes('o');
console.log(check2);