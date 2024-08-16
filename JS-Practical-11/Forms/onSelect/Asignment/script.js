let img = document.getElementById('img');
let select = document.getElementById('select');

function changeImg() {
    switch (select.value) {
        case '1':
            img.src = 'image1.png';
            break;
        case '2':
            img.src = 'image2.png';
            break;
        case '3':
            img.src = 'image3.png';
            break;
        case '4':
            img.src = 'image4.png';
            break;
        default:
            break;
    }
}