let result = document.getElementById('result');
let input = document.getElementById('myInput');

function setText() {
    result.textContent = input.value;
    input.value = '';
}