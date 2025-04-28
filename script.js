function Solve(val) {
    const v = document.getElementById('res');
    v.value += val;
}

let history = [];

function Result() {
    const num1 = document.getElementById('res').value;
    try {
        let num2 = eval(num1.replace('x', '*'));
        document.getElementById('res').value = num2;
        history.push(num1 + " = " + num2);
    } catch {
        document.getElementById('res').value = 'Error';
    }
}

function showHistory() {
    let output = "Calculation History:\n";
    if (history.length === 0) {
        output += "No calculations yet.";
    } else {
        for (let i = 0; i < history.length; i++) {
            output += history[i] + "\n";
        }
    }
    alert(output);
}

function Clear() {
    const inp = document.getElementById('res');
    inp.value = '';
}

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
    } else if (key.toLowerCase() === 'h') {
        showHistory();
    }
});
