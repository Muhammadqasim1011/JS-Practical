function checkStrength() {
    let password = document.getElementById('password').value;
    let strengthText = document.getElementById('passwordStrength');
    let strength = '';

    if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[@$!%*?&]/.test(password)) {
        strength = 'Strong';
        strengthText.style.color = '#28a745'; // green
    } else if (password.length >= 8 && (/[A-Z]/.test(password) || /[a-z]/.test(password)) && /\d/.test(password)) {
        strength = 'Medium';
        strengthText.style.color = '#ffc107'; // yellow
    } else {
        strength = 'Weak';
        strengthText.style.color = '#dc3545'; // red
    }

    strengthText.textContent = `Password Strength: ${strength}`;
};

function genRandomPassword() {
    let passwordLength = Number(document.getElementById('passLength').value);
    let output = document.getElementById('output');
    let charactors = "qwertyuiopasdfghjklzxcvbnm!@#$QWERTYUIOPASDFGHJKLZXCVBNM12347890";
    let password = "";

    if (passwordLength < 1) {
        alert("Password length must be at least 1");
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        password += charactors.charAt(Math.floor(Math.random() * charactors.length));
    }
    output.value = password;
}

function copyToClipboard() {
    let passwordInput = document.getElementById('output');
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
    passwordInput.value = '';
}