const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//function to show error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
    
}

//function to show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//function to check email validity
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



//The below is the event listener listening on SUBMIT event
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (username.value === '') {
        showError(username, 'User cannot be null');
    } else if (username.value.length < 3 ) {
        showError(username, 'Username cannot be less than 3 characters');
    } else {
        showSuccess(username);
    }


    if (email.value === '') {
        showError(email, 'Email cannot be null');
    } else if (isValidEmail(email.value) === false){
        showError(email, 'Email is invalid');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password cannot be null');
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Confirm Password cannot be null');
    } else {
        showSuccess(password2);
    }



})
