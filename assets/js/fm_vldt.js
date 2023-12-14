let submit = document.getElementById('submit');
let message = document.getElementById('vldt_msg');
let modal = document.getElementById('modal');
let main = document.getElementById('main');
let email = document.getElementById('email').value;

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
    // 1. check if input field is empty
    // 2. if 1 is true, do nothing else check if input is string && email
    // 3. if 2 is true, submit email
    if (isEmpty(email)) {
        console.log(`field is empty..`);
    } else {
        console.log(`field is not empty.`);
    }
})

console.log(isInputEmpty(email));
console.log(isEmail(email));
