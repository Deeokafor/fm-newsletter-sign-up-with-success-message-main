let submitButton = document.getElementById('submit-button');
let validationMessage = document.getElementById('validation-message');
let modal = document.getElementById('modal');
let main = document.getElementById('main');
let submittedEmailName = document.querySelector('#submitted-email-name');
let modalDismissButton = document.querySelector('#modal-dismiss-button')

const errorMsg = {
    err1: 'input field can\'t be empty.',
    err2: 'Invalid format, enter a valid email.'
}

function addClass (element, className) {
    return element.classList.add(className);
}

function removeClass (element, className) {
    return element.classList.remove(className);
}

//returns true if input has reqqquired character
function isEmail(input) { 
    //ditched this for a regex
    // for (var i = 0; i < email.length; i++) {
    //     if (email[i] === '@') {
    //         return true;
    //     }
    // }
    // return false;
    return /\S+@\S+\.\S+/.test(input);
}

//returns true if input is string
function isString(input) {
    return typeof input === 'string';
}

//returns true if space is empty
function isInputEmpty(input) {
    return input.trim() === '';
}

submitButton.addEventListener('click', function (event) {
    //validate input
    event.preventDefault();

    // Get the current value of the email input inside the event listener
    let email = document.getElementById('email').value;

    // 1. check if input field is empty
    // 2. if 1 is true, do nothing else check if input is string && email
    // 3. if 2 is true, submit email
    if (isInputEmpty(email)) {
        console.log(errorMsg.err1);
        validationMessage.textContent = errorMsg.err1;
    } else if (isString(email) && isEmail(email)) {
        console.log(`submitiing email:`, email);
        validationMessage.textContent = null;
        addClass(main, 'tw-hidden');
        removeClass(modal, 'tw-hidden');
        submittedEmailName.textContent = email;
    } else {
        console.log(errorMsg.err2);
        validationMessage.textContent = errorMsg.err2;
    }
})

modalDismissButton.addEventListener('click', function () {
    window.location.reload();
})