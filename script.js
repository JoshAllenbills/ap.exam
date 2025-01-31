//This function appends the value passed to it (val) to the current value of an input field with the id 'res'.
function Solve(val) {
    const v = document.getElementById('res');
    v.value += val;
 }
 //This code takes a mathematical expression from an input field with the id 'res', replaces 'x' with '*'. 
 // Evaluates the expression, and then updates the input field with the result. 
 // If there's an error during evaluation, it sets the input field value to 'Error'.
 function Result() {
    const num1 = document.getElementById('res').value;
    try {
       let num2 = eval(num1.replace('x', '*'));
       document.getElementById('res').value = num2;
    } catch {
       document.getElementById('res').value = 'Error';
    }
 }
 // The function below is the clear function of the calculator,it clears anything written in the screen above//
 function Clear() {
    const inp = document.getElementById('res');
    inp.value = '';
 }
 // The function below is the back function, it deletes the most recent digit typed into the calculator//
 function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
 }
 // The code below  listens for keydown events and performs different actions based on the key pressed://
//If the key is a digit or one of the operators (+, -, *, /, ., %), it calls the Solve function, replacing * with x.//
//If the key is Enter, it calls the Result function.//
//If the key is Backspace, it calls the Back function.//
//If the key is c or C, it calls the Clear function.//
 document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
       Result();
    } else if (key === 'Backspace') {
       Back();
    } else if (key.toLowerCase() === 'c') {
       Clear();
    }
 });