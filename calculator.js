// operator functions

function add (curr,next) {
    let result = curr + next;
    return result;
}

function subtract (curr,next) {
    let result = curr - next;
    return result;
}

function multiply (curr,next) {
    let result = curr * next;
    return result;
}

function divide (curr,next) {
    let result = Math.round(curr / next);
    return result;
}

let current = 0;
let operator = '';
let next = 0;

