document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let input = document.getElementById('input').value;

    let percentage = parseFloat(input);
    let grade = '';

    if (percentage < 0 || percentage > 100) {
        alert("Invalid input. Please enter a number between 0 and 100.")
        return;
    }
    else if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F and you are fail!. Try next time';
    }

    document.getElementById('marks').textContent = `Your Marks is ${percentage} out of 100`;
    document.getElementById('answer').textContent = `Your Grade is ${grade}`;
});
