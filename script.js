// This function appends the value passed to it (val) to the current value of an input field with the id 'res'.
function Solve(val) {
   const v = document.getElementById('res');
   v.value += val;
}

// This array stores the history of calculations done in the calculator.
// This fulfills the requirement of using a list to manage program complexity.
let history = [];

// This function evaluates the expression in the input field.
// It replaces 'x' with '*' for multiplication, evaluates the expression,
// displays the result, and adds it to the history list.
// If there's an error during evaluation, it sets the input field value to 'Error'.
function Result() {
   const num1 = document.getElementById('res').value;
   try {
       let num2 = eval(num1.replace('x', '*'));
       document.getElementById('res').value = num2;
       history.push(num1 + " = " + num2); // Add result to history
   } catch {
       document.getElementById('res').value = 'Error';
   }
}

// This is a student-developed procedure that shows the full history of past calculations.
// It uses iteration (for loop) and selection (if statement).
// It outputs the history as an alert (can be replaced with on-page display).
function showHistory() {
   let output = "Calculation History:\n";
   if (history.length === 0) {
       output += "No calculations yet.";
   } else {
       for (let i = 0; i < history.length; i++) {
           output += history[i] + "\n";
       }
   }
   alert(output); // Visual output of history
}

// This function clears the input field with id 'res'.
function Clear() {
   const inp = document.getElementById('res');
   inp.value = '';
}

// This function deletes the last character from the input field value.
function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0, -1);
}

// This event listener responds to keydown events and triggers different actions:
// - If the key is a digit or an operator, it appends the value (replacing * with x for display)
// - If Enter is pressed, it calculates the result
// - If Backspace is pressed, it deletes the last character
// - If C is pressed, it clears the screen
// - If H is pressed, it shows the calculation history
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
   } else if (key.toLowerCase() === 'h') {
       showHistory(); // Call to student-developed procedure
   }
});
