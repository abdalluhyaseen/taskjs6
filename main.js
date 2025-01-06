const form = document.getElementById("registration-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const registerButton = document.getElementById("register-button");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const validateForm = () => {
  let isValid = true;
  if (email.value.trim() === "") {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }
  if (password.value.trim() === "") {
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }
  if (confirmPassword.value.trim() === "") {
    confirmPasswordError.textContent = "Confirm Password is required.";
    confirmPasswordError.style.display = "block";
    isValid = false;
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    confirmPasswordError.style.display = "block";
    isValid = false;
  } else {
    confirmPasswordError.style.display = "none";
  }
  registerButton.disabled = !isValid;
};
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);
form.addEventListener("submit", (e) => {
  validateForm();
  if (registerButton.disabled) {
    e.preventDefault();
  } else {
    alert("User registration successful!");
  }
});
