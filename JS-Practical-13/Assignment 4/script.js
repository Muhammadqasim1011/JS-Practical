let heading = document.getElementById("heading");

function change() {
  heading.className = heading.classList.contains("blue")? "red"
    : heading.classList.contains("red")? "black"
    : heading.classList.contains("black")? "yellow"
    : "blue";
}
