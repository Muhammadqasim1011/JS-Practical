// 
const book = {
    title: "A smart way to learn Javascript",
    author: "Ryan Dhal",
    pages: 400,
    read: false
}

// Assignment 2
// console.log(book.title);
// console.log(book.author);
// console.log(book.read);
book.read = true
// console.log(book.read);


// Assingment 3
book.summary = 'This is Summary';
// console.log(book.title);
// console.log(book.author);
// console.log(book.summary);

// Assignment 4
function Book(tit, auth, page) {
    this.title = tit;
    this.author = auth;
    this.pages = page; 
}

let book2 = new Book('JavaScript: The Good Parts', 'Douglas Crockford', 800);
let book3 = new Book('Eloquent JavaScript', 'Frank Miller', 472);

// Assignment 5

function Vehicle(type){
    this.type = type;
}

Vehicle.prototype.startEngine = 'yes';

let car = new Vehicle('Car');
let truck = new Vehicle('truck');

console.log(truck);
