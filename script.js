function Solve(val) {
    const v = document.getElementById('res');
    v.value += val;
 }
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