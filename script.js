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
    }
  }
}

passwordField.addEventListener('change', (e) => {
 validatePassword();
})

confirmPasswordField.addEventListener('change', (e) => {
  validatePassword();
})

