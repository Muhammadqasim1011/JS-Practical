let paragraph = document.getElementById('para');
let result = document.getElementById('result');
let newText = document.getElementById('new-text');

function getText() {
    result.textContent = paragraph.textContent
}

function setText() {

    if (newText.value === '') {
        alert('write some text')
    } else {
        paragraph.textContent = newText.value;
        newText.value = '';
    }

}