// Sample array for practice
let arr = [1, 2, 3, 4, 5];

// 1. push() - Adds elements to the end of an array
arr.push(6); // arr is now [1, 2, 3, 4, 5, 6]

// 2. pop() - Removes the last element from an array
arr.pop(); // arr is now [1, 2, 3, 4, 5]

// 3. shift() - Removes the first element from an array
arr.shift(); // arr is now [2, 3, 4, 5]

// 4. unshift() - Adds elements to the beginning of an array
arr.unshift(1); // arr is now [1, 2, 3, 4, 5]

// 5. map() - Creates a new array with the results of calling a function for every array element
let doubled = arr.map(x => x * 2); // doubled is [2, 4, 6, 8, 10]

// 6. filter() - Creates a new array with all elements that pass the test implemented by the provided function
let even = arr.filter(x => x % 2 === 0); // even is [2, 4]

// 7. reduce() - Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
let sum = arr.reduce((total, current) => total + current, 0); // sum is 15

// 8. forEach() - Executes a provided function once for each array element
arr.forEach(x => console.log(x)); // prints 1, 2, 3, 4, 5

// 9. find() - Returns the value of the first element in the array that satisfies the provided testing function
let found = arr.find(x => x > 3); // found is 4

// 10. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function
let foundIndex = arr.findIndex(x => x > 3); // foundIndex is 3

// 11. some() - Tests whether at least one element in the array passes the test implemented by the provided function
let hasEven = arr.some(x => x % 2 === 0); // hasEven is true

// 12. every() - Tests whether all elements in the array pass the test implemented by the provided function
let allEven = arr.every(x => x % 2 === 0); // allEven is false

// 13. includes() - Determines whether an array includes a certain value among its entries
let includesThree = arr.includes(3); // includesThree is true

// 14. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present
let indexOfThree = arr.indexOf(3); // indexOfThree is 2

// 15. concat() - Merges two or more arrays
let arr2 = [6, 7, 8];
let merged = arr.concat(arr2); // merged is [1, 2, 3, 4, 5, 6, 7, 8]

// 16. slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
let sliced = arr.slice(1, 3); // sliced is [2, 3]

// 17. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
arr.splice(2, 1, 'a', 'b'); // arr is now [1, 2, 'a', 'b', 4, 5]
