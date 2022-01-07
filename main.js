const keyNum = document.querySelectorAll('.number');
const operNum = document.querySelectorAll('.operator');
const eqlOper = document.querySelector('.equal-sign');
const clr = document.querySelector('.clear');
const calcScreen = document.querySelector('.calculator-screen');

let calculation = [];
let oldNumber = [];
let currentOper = '';
let currentNumber = [];
calcScreen.disable = true;

keyNum.forEach(function (keyNum) {
    keyNum.addEventListener('click', function pushNumber(event) {
        calculation.push(keyNum.value);
        currentNumber.push(keyNum.value);
        calcScreen.value = calculation.join('');

    })
});

operNum.forEach(function (operNum) {
    operNum.addEventListener('click', function pushOperator(event) {
        calculation.push(operNum.value);
        currentOper = operNum.value;
        oldNumber = currentNumber;
        currentNumber = [];
        calcScreen.value = calculation.join('');
    })
});

eqlOper.addEventListener('click', function calculate(event) {

    let oldNumStr = parseFloat(oldNumber.join('').toString());
    let newNumStr = parseFloat(currentNumber.join('').toString());

    if (currentOper === '+') {
        calcScreen.value = oldNumStr + newNumStr;
    } else if (currentOper === '-') {
        calcScreen.value = oldNumStr - newNumStr;
    } else if (currentOper === '*') {
        calcScreen.value = oldNumStr * newNumStr;
    } else if (currentOper = '/') {
        calcScreen.value = oldNumStr / newNumStr;
    } else {
        calcScreen.value = "Error";
    }
})

clr.addEventListener('click', function clear(event) {
    calculation = [];
    oldNumber = [];
    currentOper = '';
    currentNumber = [];
    calcValue = '';
    calcScreen.value = 0
})




