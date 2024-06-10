
let array = [1, 2, 3, 4, 5];

// Remove the first two elements
array.splice(0, 2);

// Add three new elements to the end
array.push(6, 7, 8);

// Print the new array using a for loop
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
