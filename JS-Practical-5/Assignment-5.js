let array = [1, 2, 3, 4, 5];
let index = array.indexOf(3);

// Remove all elements starting from the index
array.splice(index);

// Print the new array using a for loop
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
