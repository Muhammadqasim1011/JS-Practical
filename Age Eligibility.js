let age = prompt("Enter your age");
age = parseInt(age); // Convert the input to an integer

if (age >= 18 && age <= 65) {
    alert("You are Eligible");
} else {
    alert("You are not eligible for CNIC");
}