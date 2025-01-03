let submitButton = document.getElementById('submit-button');
let validationMessage = document.getElementById('validation-message');
let modal = document.getElementById('modal');
let main = document.getElementById('main');
let submittedEmailName = document.querySelector('#submitted-email-name');
let modalDismissButton = document.querySelector('#modal-dismiss-button');
let footer = document.querySelector('#footer');

const errorMsg = {
    err1: 'input field can\'t be empty.',
    err2: /*'Invalid format, enter a valid email.'*/ 'Valid Email Required'
}

function addClass (element, className) {
    return element.classList.add(className);
}

function removeClass (element, className) {
    return element.classList.remove(className);
}

//returns true if input has required character
function isEmail(input) { 
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
    let email = document.getElementById('email-input');

    // 1. check if input field is empty
    // 2. if 1 is true, do nothing else check if input is string && email
    // 3. if 2 is true, submit email
    if (isInputEmpty(email.value)) {
        console.log(errorMsg.err1);
        validationMessage.textContent = errorMsg.err1;
        addClass(email, 'tw-border-ns-tmt');
        addClass(email, 'tw-bg-ns-tmt/10');
    } else if (isString(email.value) && isEmail(email.value)) {
        console.log(`submitiing email:`, email.value);
        validationMessage.textContent = null;
        addClass(main, 'tw-hidden');
        addClass(main, 'md:tw-hidden')
        removeClass(modal, 'tw-hidden');
        removeClass(email, 'tw-border-ns-tmt');
        removeClass(email, 'tw-bg-ns-tmt/10');
        removeClass(email, 'tw-text-ns-tmt');
        addClass(footer, 'tw-hidden')
        submittedEmailName.textContent = email.value;
    } else {
        console.log(errorMsg.err2);
        validationMessage.textContent = errorMsg.err2;
        addClass(email, 'tw-border-ns-tmt');
        addClass(email, 'tw-bg-ns-tmt/10');
        addClass(email, 'tw-text-ns-tmt');
    }
})

modalDismissButton.addEventListener('click', function () {
    window.location.reload();
})