// Switch Statment
// Assignment 1:
// Write a JavaScript program that uses a switch statement to print the day of the week based on a given number (1-7).

function getDay(weekNum) {
    if (weekNum > 0 && weekNum < 8) {
        switch (weekNum) {
            case 1:
                return ("The Day is Monday");
                break;

            case 2:
                return ("The Day is Tuesday");
                break;

            case 3:
                return ("The Day is Wednesday");
                break;

            case 4:
                return ("The Day is Thursday");
                break;

            case 5:
                return ("The Day is Friday");
                break;

            case 6:
                return ("The Day is Saturday");
                break;

            case 7:
                return ("The Day is Sunday");
                break;

            default:
                return ("Sunytax Error")
                break;
        }
    } else {
        return "Please enter a number between 1 and 7.";
    }
}

// console.log(getDay(1));
// console.log(getDay(4));


// Assignment 2:
// Write a JavaScript program that uses a switch statement to print the name of a month based on a given number (1-12).

function getMonth(monthNum) {
    if (monthNum > 0 && monthNum < 13) {
        switch (monthNum) {
            case 1:
                return ("January");
                break;

            case 2:
                return ("Fabruary");
                break;

            case 3:
                return ("March");
                break;

            case 4:
                return ("April");
                break;

            case 5:
                return ("May");
                break;

            case 6:
                return ("June");
                break;

            case 7:
                return ("July");
                break;

            case 8:
                return ("August");
                break;

            case 9:
                return ("September");
                break;

            case 10:
                return ("October");
                break;

            case 11:
                return ("November");
                break;

            case 12:
                return ("December");
                break;

            default:
                return ("Sunytax Error")
                break;
        }
    } else {
        return "Please enter a number between 1 and 12.";
    }
}

// console.log(getMonth(1));
// console.log(getMonth(13));

// Assignment 3:
// Write a JavaScript program that uses a switch statement to determine the type of a vehicle based on a given string ("car", "truck", "motorcycle", etc.).

function vehicleType(str) {
    switch (str) {
        case "car":
            return "The type of vehicle is Car";
        case "truck":
            return "The type of vehicle is Truck";
        case "motorcycle":
            return "The type of vehicle is Motorcycle";
        default:
            return "Invalid vehicle type. Please enter 'car', 'truck', or 'motorcycle'.";
    }
}

console.log(vehicleType("motorcycle"));
console.log(vehicleType("bicycle"));


// Assignment 4:
// Write a JavaScript program that uses a switch statement to calculate the cost of shipping based on the weight of a package (0-10 pounds, 11-20 pounds, etc.).

function shippingCost(num) {
    let cost = "";

    if (num > 0) {
        switch (true) {
            case num > 0 && num <= 10:
                cost = "$7";
                break;
            case num > 10 && num <= 20:
                cost = "$10";
                break;
            case num > 20 && num <= 30:
                cost = "$14";
                break;
            case num > 30 && num <= 40:
                cost = "$20";
                break;
            case num > 40 && num <= 70:
                cost = "$32";
                break;
            case num > 70:
                cost = "$49.99";
                break;
            default:
                return "Syntax Error";
        }
    } else {
        return "Enter the correct weight!";
    }

    return "The shipping cost for " + num + " kg is " + cost;
}

// console.log(shippingCost(32));
// console.log(shippingCost(80));

// Assignment 5:
// Write a JavaScript program that uses a switch statement to determine the grade of a student based on their score (A: 90-100, B: 80-89, C: 70-79, etc.).

function studentMarks(num) {
    let grade = "";

    if (num >= 0 && num <= 100) {
        switch (true) {
            case num >= 0 && num <= 40:
                grade = "F";
                break;
            case num > 40 && num <= 50:
                grade = "E";
                break;
            case num > 50 && num <= 60:
                grade = "D";
                break;
            case num > 60 && num <= 70:
                grade = "C";
                break;
            case num > 70 && num <= 80:
                grade = "B";
                break;
            case num > 80 && num <= 90:
                grade = "A";
                break;
            case num > 90 && num <= 100:
                grade = "A+";
                break;
            default:
                return "Syntax Error";
        }
    } else {
        return "Enter a correct percentage!";
    }
    return "The grade of the student with " + num + "% is " + grade;
}

// console.log(studentMarks(35));
// console.log(studentMarks(45));
// console.log(studentMarks(105));