const totalNumbers = parseInt(prompt("Enter the number of an array between 1-1000"));

// Generate an array of random numbers
let numberArray = [];
for (let i = 0; i < totalNumbers; i++) {
    let randomNumber = Math.floor(Math.random() * 1000); // Generates a random number between 0 and 1000
    numberArray.push(randomNumber);
}

console.log(numberArray);

if (numberArray.length === 0) {
    console.error("Array is empty");
    alert("Array is empty or wrong input");
} else {
    let highest = numberArray[0];
    let lowest = numberArray[0];

    for (let i = 1; i < numberArray.length; i++) {
        if (numberArray[i] > highest) {
            highest = numberArray[i];
        }
        if (numberArray[i] < lowest) {
            lowest = numberArray[i];
        }
    }

    console.log("Lowest:", lowest);
    console.log("Highest:", highest);
    alert("Lowest: " + lowest);
    alert("Highest: " + highest);
}
