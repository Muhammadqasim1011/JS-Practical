let body = document.body;

function  toggleMode () {
    if (body.classList.contains('light-mood')) {
        body.classList.remove('light-mood');
        body.classList.add('dark-mood');
    } else {
        body.classList.remove('dark-mood');
        body.classList.add('light-mood');
    }
}