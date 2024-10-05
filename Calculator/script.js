let buttons = document.querySelectorAll('.button');
let display = document.querySelector('#display');
let displayString = '';
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (event) => {
        let buttonValue = event.target.innerHTML;
        if (buttonValue === 'C') {
            displayString = '';
            display.value = '0';
        }
        else if (buttonValue === 'Del') {
            displayString = displayString.slice(0, -1);
            display.value = displayString || '0';
        }
        else if (buttonValue === '=') {
            try {
                displayString = eval(displayString);
                display.value = displayString;
            } catch (error) {
                display.value = 'Error';
                displayString = '';
            }
        }
        else {
            displayString += buttonValue;
            display.value = displayString;
        }
    });
});
