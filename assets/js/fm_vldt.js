let submit = document.getElementById('submit');
let message = document.getElementById('vldt_msg');
let modal = document.getElementById('modal');
let main = document.getElementById('main');
let email = document.getElementById('email').value;

const errorMsg = {
    err1: 'input field can\'t be empty.',
    err2: 'Invalid email format, Please enter a valid email.'
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

submit.addEventListener('click', function (event) {
    //validate input
    event.preventDefault();

    // Get the current value of the email input inside the event listener
    let email = document.getElementById('email').value;

    // 1. check if input field is empty
    // 2. if 1 is true, do nothing else check if input is string && email
    // 3. if 2 is true, submit email
    if (isInputEmpty(email)) {
        console.log(errorMsg.err1);
        message.textContent = errorMsg.err1;
    } else if (isString(email) && isEmail(email)) {
        console.log(`submitiing email:`, email);
        message.textContent = null;
    } else {
        console.log(errorMsg.err2);
    }
})
