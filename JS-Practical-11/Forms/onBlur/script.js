const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validateName() {
    const nameInput = document.getElementById('name');
    const nameGroup = document.getElementById('nameGroup');
    const nameError = document.getElementById('nameError');

    if (nameInput.value.trim() === '') {
        nameGroup.classList.add('invalid');
        nameGroup.classList.remove('valid');
        nameError.style.display = 'block';
    } else {
        nameGroup.classList.add('valid');
        nameGroup.classList.remove('invalid');
        nameError.style.display = 'none';
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailGroup = document.getElementById('emailGroup');
    const emailError = document.getElementById('emailError');

    if (!emailRegex.test(emailInput.value.trim())) {
        emailGroup.classList.add('invalid');
        emailGroup.classList.remove('valid');
        emailError.style.display = 'block';
    } else {
        emailGroup.classList.add('valid');
        emailGroup.classList.remove('invalid');
        emailError.style.display = 'none';
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordGroup = document.getElementById('passwordGroup');
    const passwordError = document.getElementById('passwordError');

    if (!passwordRegex.test(passwordInput.value.trim())) {
        passwordGroup.classList.add('invalid');
        passwordGroup.classList.remove('valid');
        passwordError.style.display = 'block';
    } else {
        passwordGroup.classList.add('valid');
        passwordGroup.classList.remove('invalid');
        passwordError.style.display = 'none';
    }
}

function formValidate(event) {
    validateName();
    validateEmail();
    validatePassword();

    if (
        document.getElementById('nameGroup').classList.contains('invalid') ||
        document.getElementById('emailGroup').classList.contains('invalid') ||
        document.getElementById('passwordGroup').classList.contains('invalid')
    ) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
}
