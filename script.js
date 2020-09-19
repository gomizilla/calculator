let storedNum = 0;
let display = document.getElementById("display");


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
 return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (a === 0 || b === 0) {
        return "Nice try";
    } else {
        return a / b;
    }
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
            
        case "-":
            return subtract(a, b);

        case "*":
            return multiply(a, b);
        
        case "/":
            return divide(a, b);

        default:
            return "Something went wrong"
    }
}

// event listeners for buttons

const one = document.getElementById("1");
one.addEventListener("click", function() {
    display.value += "1";
    storedNum = display.value;
});

const two = document.getElementById("2");
two.addEventListener("click", function() {
    display.value += "2";
    storedNum = display.value;
});

const three = document.getElementById("3");
three.addEventListener("click", function() {
    display.value += "3";
    storedNum = display.value;
});

const four = document.getElementById("4");
four.addEventListener("click", function() {
    display.value += "4";
    storedNum = display.value;
});

const five = document.getElementById("5");
five.addEventListener("click", function() {
    display.value += "5";
    storedNum = display.value;
});

const six = document.getElementById("6");
six.addEventListener("click", function() {
    display.value += "6";
    storedNum = display.value;
});

const seven = document.getElementById("7");
seven.addEventListener("click", function() {
    display.value += "7";
    storedNum = display.value;
});

const eight = document.getElementById("8");
eight.addEventListener("click", function() {
    display.value += "8";
    storedNum = display.value;
});

const nine = document.getElementById("9");
nine.addEventListener("click", function() {
    display.value += "9";
    storedNum = display.value;
});

const zero = document.getElementById("0");
zero.addEventListener("click", function() {
    display.value += "0";
    storedNum = display.value;
});

const clear = document.getElementById("c");
clear.addEventListener("click", function() {
    display.value = "";
    storedNum = 0;
});


