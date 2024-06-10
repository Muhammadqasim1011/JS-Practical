const numbersArray = [34, 78, 12, 90, 5, 67, 1];

if (numbersArray.length === 0) {
    // console.error("Array is empty");
    alert("Array is empty");
} else {
    let highest = numbersArray[0];
    let lowest = numbersArray[0];

    for (let i = 1; i < numbersArray.length; i++) {
        if (numbersArray[i] > highest) {
            highest = numbersArray[i];
        }
        if (numbersArray[i] < lowest) {
            lowest = numbersArray[i];
        }
    }

    // console.log("Lowest:", lowest);
    // console.log("Highest:", highest);
    alert("Lowest: " + lowest);   
    alert("Highest: " + highest); 
}
