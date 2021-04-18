let result = "";
let display = document.getElementById("result");

function addString(value) {
    result += value;
    display.innerText = result;
}

function clr() {
    result = "";
    display.innerText = "0";
}

function equal() {
    let operator = eval(display.innerHTML);
    display.innerHTML = operator;
}