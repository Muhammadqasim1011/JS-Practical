let step1 = document.querySelector('.step1');
let step2 = document.querySelector('.step2');
let step3 = document.querySelector('.step3');
let emailAddress = document.getElementById('emailAddress');
let verifyEmail = document.getElementById('verifyEmail');
let messageBox = document.getElementById('message-box');
let inputs = document.querySelectorAll('.otp-group input');
let nextButton = document.querySelector('.nextButton');
let verifyButton = document.querySelector('.verifyButton');
let OTP = "";

window.addEventListener('load', () => {
  emailjs.init("0khSDAJBK5Cihm4SF");
  step2.style.display = "none";
  step3.style.display = "none";
  nextButton.classList.add('disable');
});

function manageMassage(color, opacity, text) {
  messageBox.style.color = color;  // Correct variable
  messageBox.style.opacity = opacity;
  messageBox.innerHTML = text;
}

const validateEmail = (email) => {
  let regx = /\S+@\S+\.\S+/;
  if (regx.test(email)) {
    nextButton.classList.remove('disable');
  } else {
    nextButton.classList.add('disable');
  }
};

const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

// Update for OTP auto-focus
inputs.forEach((input, index) => {
  input.addEventListener("keyup", (e) => {
    // Ensure only single character is entered
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.substr(0, 1);
    }

    // Move to the next input field when a number is entered
    if (e.target.value !== "" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }

    // Move to the previous input when backspace is pressed and the current input is empty
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputs[index - 1].focus();
    }

    // Enable the Verify button if all inputs are filled
    if (inputs[0].value !== "" && inputs[1].value !== "" && inputs[2].value !== "" && inputs[3].value !== "") {
      verifyButton.classList.remove('disable');
    } else {
      verifyButton.classList.add('disable');
    }
  });
});

let serviceID = "service_lkzjfum";
let templateID = "template_amvb9ke";
nextButton.addEventListener('click', () => {
  OTP = generateOTP();
  nextButton.innerHTML = "&#9889; Sending";
  let templateParameter = {
    fromName: 'Muhammad Qasim Dev Community',
    OTP: OTP,
    message: 'Please find the attached file',  // Typo corrected
    replyTo: emailAddress.value,
  };

  emailjs.send(serviceID, templateID, templateParameter).then((res) => {
    console.log('Email sent successfully', res);
    step1.style.display = "none";
    step2.style.display = "block";
    nextButton.innerHTML = "Next &rarr;";
    verifyEmail.innerHTML = emailAddress.value;
  }, (err) => {
    console.log('Failed to send email', err);
    manageMassage("red", "1", "Failed to send email");
    setTimeout(() => {
      manageMassage("", "0", "");  // Reset message box
    }, 2000);
  });
});

verifyButton.addEventListener("click", () => {
  let values = "";
  inputs.forEach((input) => {
    values += input.value;
  });
  if (OTP == values) {
    step2.style.display = "none";
    step3.style.display = "block";
  } else {
    verifyButton.classList.add('error-shake');
    setTimeout(() => {
      verifyButton.classList.remove('error-shake');
    }, 1000);
  }
});

function changeEmail() {
  step1.style.display = "block";
  step2.style.display = "none";
  step3.style.display = "none";
}
