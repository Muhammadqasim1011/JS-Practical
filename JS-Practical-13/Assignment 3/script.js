let myList = document.getElementById('mylist');
let listItems = document.getElementsByClassName('list-item');

// there are many ways to do it
// Method 1
let childerns = myList.children; //return all the child element and store it in childeren
let childArray = Array.from(childerns); //covert it to an Array;
for (let i = 0; i< childArray.length; i++) {
    console.log(childArray[i]);
    console.log(childArray[i].textContent);
}


// Method 2

Array.from(listItems).forEach(listItem => {
    console.log(listItem);
    console.log(listItem.textContent);
    
});