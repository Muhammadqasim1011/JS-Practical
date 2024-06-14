// let time = parseInt(prompt("Please enter the time (0-23):"));

// if (isNaN(time) || time < 0 || time > 23) {
//     alert("Invalid input. Please enter a valid time between 0 and 23.");
// } else if (!(time >= 6 && time < 18)) {
//     alert("It's night time.");
// } else {
//     alert("It's day time.");
// }


// using Tarnary Operator

// let time = parseInt(prompt("Please enter the time (0-23):"));

// alert(isNaN(time) || time < 0 || time > 23 ? "Invalid input. Please enter a valid time between 0 and 23." : !(time >= 6 && time < 18) ? "It's night time." : "It's day time.");



// Using letiables

// let time = parseInt(prompt("Please enter the time (0-23):"));
// let isValidTime = !(isNaN(time) || time < 0 || time > 23);
// let isDayTime = (time >= 6 && time < 18);

// if (!isValidTime) {
//     alert("Invalid input. Please enter a valid time between 0 and 23.");
// } else if (!isDayTime) {
//     alert("It's night time.");
// } else {
//     alert("It's day time.");
// }


// Get the current hour

// let time = new Date().getHours();
// if (!(time >= 6 && time < 18)) {
//     alert("It's night time.");
// } else {
//     alert("It's day time.");
// }