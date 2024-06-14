
let cars = ["BMW", "Audi", "Mercedes", "Toyota", "Suzuki"];

let cars2 = ["Shoba", "Shezan"];

// To find the index of a value
// console.log(cars.indexOf("Toyota"));


// Length of an cars array 
// console.log(cars.length);

// Adding a value to array using index
// cars[6] = "Honda";

// Removing last element of array by uisng (pop) method
// cars.pop();

// Using push we can add element at the end of array
// cars.push("Volvo")

// Adding more than 1
// cars.push("Volksvogen", "Tata");


//  Removing begining element of array by uisng (shift()) method
// cars.shift();

//  Adding begining element of array by uisng (unshift()) method
// cars.unshift("Tesla", "MG");

// Reverse the order of array
// cars.reverse();

// Joing the two arrays 
// let allcars = cars.concat(cars2);
// console.log(allcars);

// To check where the element is an array or not uisng (include())
// let find = cars.includes("Toyota")
// console.log(find);

// The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.
// cars.fill("Toyota")

// fill(value)
// fill(value, start)
// fill(value, start, end)
// cars.fill("Toyota", 3, 4)

// A single object, referenced by each slot of the array:
// const arr = Array(3).fill({}); // [{}, {}, {}]
// arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
// console.log(arr);

// It gives us the key value pair of an array
// let inter = cars.entries()
// console.log(inter.next().value);
// console.log(inter.next().value);
// console.log(inter.next().value);
// console.log(inter.next().value);

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// const result = cars.filter((cars) => cars.length < 6);
// console.log(result);

// Add the elements anywhere in the array using the (splice()) method
// slice()
// slice(start)
// end means that how many element to be remove
// slice(start, end)
// slice(start, end, "add", "sub") adding element
// cars.splice(2, 2)

// Also adding and removing the element
// cars.splice(2, 1, "Peshawer" , "Islamabad")

console.log(cars);
// Only Adding after the star element
cars.splice(3, 0, "Peshawer" , "Islamabad")

console.log(cars);
