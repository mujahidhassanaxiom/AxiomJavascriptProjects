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
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${getInputId(input)}'s value is invalid`);
    }
}

// Function to check if the required fields got data

function checkRequired(inputArray) {

    inputArray.forEach(function(input){
        if (input.value === '') {
            showError(input, `${getInputId(input)} cannot be null` );
        } else {
            showSuccess(input);
        }
    });
}

// Function to check field lengths
function checkLength(input, min, max){
    if (input.value !== '') {
        if (input.value.length < min) {
            showError(input, `${getInputId(input)}'s Minimum length allowed is ${min}`);
        } else if (input.value.length > max) {
            showError(input, `${getInputId(input)}'s Maximum length allowed is ${max}`);
        } else {
            showSuccess(input);
        }
    }
}

// Function to check password and confirm passwords fields matches
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2,"Password and confirm password not matching");
        
    }
}

// Function to get input id and initcap it and return

function getInputId(input) {

    return input.id.toUpperCase().charAt(0) + input.id.slice(1);
}

//The below is the event listener listening on SUBMIT event
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
    // if (username.value === '') {
    //     showError(username, 'User cannot be null');
    // } else if (username.value.length < 3 ) {
    //     showError(username, 'Username cannot be less than 3 characters');
    // } else {
    //     showSuccess(username);
    // }


    // if (email.value === '') {
    //     showError(email, 'Email cannot be null');
    // } else if (isValidEmail(email.value) === false){
    //     showError(email, 'Email is invalid');
    // } else {
    //     showSuccess(email);
    // }

    // if (password.value === '') {
    //     showError(password, 'Password cannot be null');
    // } else {
    //     showSuccess(password);
    // }

    // if (password2.value === '') {
    //     showError(password2, 'Confirm Password cannot be null');
    // } else {
    //     showSuccess(password2);
    // }



})
