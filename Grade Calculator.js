
// Marks
let marks = prompt("Enter you marks");

if (marks > 100 || marks < 0) {
    alert("Wrong Marks. Marks must be between 0-100");
}
else if (marks >= 90 && marks <= 100) {
    alert(`Your marks is ${marks}. Your Grade is A+`)
}
else if (marks >= 80 && marks <= 89) {
    alert(`Your marks is ${marks}. Your Grade is A`)
}
else if (marks >= 70 && marks <= 79) {
    alert(`Your marks is ${marks}. Your Grade is B`)
}
else if (marks >= 60 && marks <= 69) {
    alert(`Your marks is ${marks}. Your Grade is C`)
}
else if (marks >= 50 && marks <= 59) {
    alert(`Your marks is ${marks}. Your Grade is D`)
}
else if (marks >= 40 && marks <= 49) {
    alert(`Your marks is ${marks}. Your Grade is F`)
}
else {
    alert(`Your marks is ${marks}. You are Fail`)
}
