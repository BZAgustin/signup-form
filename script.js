let passwordField = document.getElementById('password');
let confirmPasswordField = document.getElementById('confirm_password');
let noMatch = document.getElementById('no-match');

function validatePassword() {
  if(passwordField.value != '' && confirmPasswordField.value != '') {
    if(passwordField.value == confirmPasswordField.value) {
      passwordField.classList.remove('error');
      confirmPasswordField.classList.remove('error');
      noMatch.style.display = 'none';
    } else {
      passwordField.classList.add('error');
      confirmPasswordField.classList.add('error');
      noMatch.style.display = 'block';
      noMatch.textContent = "*Passwords don't match"
    }
  } else if (passwordField.value == '' && confirmPasswordField.value == '') {
    noMatch.textContent = "*Please type in a password"
  }
}

passwordField.addEventListener('keyup', (e) => {
 validatePassword();
})

confirmPasswordField.addEventListener('keyup', (e) => {
  validatePassword();
})

