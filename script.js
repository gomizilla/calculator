let storedNum = 0;
let storedNum2 = 0;
let display = document.getElementById("display");
let operatorChosen = "";


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
    
    if(operatorChosen != "") {
        display.value += "1";
        storedNum2 = parseInt(display.value, 10);
    } else {
       display.value += "1";
       storedNum = parseInt(display.value, 10); 
    }
});

const two = document.getElementById("2");
two.addEventListener("click", function() {
    if(operatorChosen != "") {
        display.value += "2";
        storedNum2 = parseInt(display.value, 10);
    } else {
       display.value += "2";
       storedNum = parseInt(display.value, 10); 
    }
});

const three = document.getElementById("3");
three.addEventListener("click", function() {
    if(operatorChosen != "") {
        display.value += "3";
        storedNum2 = parseInt(display.value, 10);
    } else {
       display.value += "3";
       storedNum = parseInt(display.value, 10); 
    }
});

const four = document.getElementById("4");
four.addEventListener("click", function() {
    if(operatorChosen != "") {
        display.value += "4";
        storedNum2 = parseInt(display.value, 10);
    } else {
       display.value += "4";
       storedNum = parseInt(display.value, 10); 
    }
});

const five = document.getElementById("5");
five.addEventListener("click", function() {
    if(operatorChosen != "") {
        display.value += "5";
        storedNum2 = parseInt(display.value, 10);
    } else {
       display.value += "5";
       storedNum = parseInt(display.value, 10); 
    }
});

const six = document.getElementById("6");
six.addEventListener("click", function() {
    if(operatorChosen != "") {
        display.value += "6";
        storedNum2 = parseInt(display.value, 10);
    } else {
       display.value += "6";
       storedNum = parseInt(display.value, 10); 
    }
});

const seven = document.getElementById("7");
seven.addEventListener("click", function() {
    if(operatorChosen != "") {
        display.value += "7";
        storedNum2 = parseInt(display.value, 10);
    } else {
       display.value += "7";
       storedNum = parseInt(display.value, 10); 
    }
});

const eight = document.getElementById("8");
eight.addEventListener("click", function() {
    if(operatorChosen != "") {
        display.value += "8";
        storedNum2 = parseInt(display.value, 10);
    } else {
       display.value += "8";
       storedNum = parseInt(display.value, 10); 
    }
});

const nine = document.getElementById("9");
nine.addEventListener("click", function() {
    if(operatorChosen != "") {
        display.value += "9";
        storedNum2 = parseInt(display.value, 10);
    } else {
       display.value += "9";
       storedNum = parseInt(display.value, 10); 
    }
});

const zero = document.getElementById("0");
zero.addEventListener("click", function() {
    if(operatorChosen != "") {
        display.value += "0";
        storedNum2 = parseInt(display.value, 10);
    } else {
       display.value += "0";
       storedNum = parseInt(display.value, 10); 
    }
});

const clear = document.getElementById("c");
clear.addEventListener("click", function() {
    display.value = "";
    storedNum = 0;
    storedNum2 = 0;
    operatorChosen = "";
});

const addButton = document.getElementById("add");
addButton.addEventListener("click", function() {
    display.value = "";
    operatorChosen = "+";
});

const subtractButton = document.getElementById("subtract");
subtractButton.addEventListener("click", function() {
    display.value = "";
    operatorChosen = "-";
});

const multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", function() {
    display.value = "";
    operatorChosen = "*";
});

const divideButton = document.getElementById("divide");
divideButton.addEventListener("click", function() {
    display.value = "";
    operatorChosen = "/";
});

const equalButton = document.getElementById("equal");
equalButton.addEventListener("click", function() {
    display.value = operate(operatorChosen, storedNum, storedNum2);
});
