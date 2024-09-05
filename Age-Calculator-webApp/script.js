let result = document.getElementById('result');
let dateInput = document.getElementById('date-input');
let calculateBtn = document.getElementById('calculate');
let errorBox = document.getElementById('error-box');

calculateBtn.addEventListener('click', () => {
    let message = document.querySelector('message');
    let today = new Date();
    let birthDate = new Date(dateInput.value);

    if (dateInput.value === '') {

        errorBox.style.opacity = '1';
        setTimeout(() => {
            errorBox.style.opacity = '0';
        }, 2000);
        
    } else if (birthDate > today) {
        
        errorBox.style.opacity = '1';
        setTimeout(() => {
            errorBox.style.opacity = '0';
        }, 2000);
        dateInput.value = '';

    } else {
        let birthDay = birthDate.getDate();
        let birthMonth = birthDate.getMonth() + 1;
        let birthYear = birthDate.getFullYear();

        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();

        let ageYears = year - birthYear;
        let ageMonths = month - birthMonth;
        let ageDays = day - birthDay;

        if (ageMonths < 0 || (ageMonths < 0 && ageMonths === 0)) {
            ageYears--;
            ageMonths += 12;
        }

        if (ageDays < 0) {
            const previousMonth = new Date(year, month - 1, 0);
            ageDays += previousMonth.getDate();
            ageMonths--;

        }

        dateInput.value = '';
        result.innerHTML = `You are ${ageDays} days, ${ageMonths} months and ${ageYears} years Old.`;
    }
})