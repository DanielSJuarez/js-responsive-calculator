const keyNum = document.querySelectorAll('.number');
const operNum = document.querySelectorAll('.operator');
const sciOper = document.querySelectorAll('.sci-ops');
const powNum = document.querySelectorAll('.pow-num');
const eqlOper = document.querySelector('.equal-sign');
const clr = document.querySelector('.clear');
const calcScreen = document.querySelector('.calculator-screen');

const deci = document.querySelector('.decimal');
const posNeg = document.querySelector('.plus-minus');

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

deci.addEventListener('click', function pushDeci(event) {
    calculation.push(deci.value);
    currentNumber.push(deci.value);
    calcScreen.value = calculation.join('');
});

posNeg.addEventListener('click', function pushPosNeg(event) {
    if(currentNumber.join('').toString() > 0){
        currentNumber = currentNumber * -1
    } else if (currentNumber.join('').toString() < 0){
        currentNumber = currentNumber 
    }
})

operNum.forEach(function (operNum) {
    operNum.addEventListener('click', function pushOperator(event) {
        calculation.push(operNum.value);
        currentOper = operNum.value;
        oldNumber = currentNumber;
        currentNumber = [];
        calcScreen.value = calculation.join('');
    })
});

sciOper.forEach(function (sciOper) {
    sciOper.addEventListener('click', function pushSciOper(event) {
        calculation.push(sciOper.value);
        currentOper = sciOper.value;
        oldNumber = currentNumber;
        currentNumber = [];
        calcScreen.value = calculation.join('');
    })
});

powNum.forEach(function (powNum) {
    powNum.addEventListener('click', function pushPowerOper(event) {
        calculation.push(powNum.value);
        currentOper = powNum.value;
        currentNumber.push(powNum.value);
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
    } else if (currentOper === '/') {
        calcScreen.value = oldNumStr / newNumStr;
    } else if (currentOper ==='') {
        calcScreen.value = Math.sqrt(newNumStr);
    } else if (currentOper ==='') {
        calcScreen.value = Math.cbrt(newNumStr);
    } else if (currentOper ==='²') {
        calcScreen.value = Math.pow(newNumStr, 2);
    } else if (currentOper ==='³') {
        calcScreen.value = Math.pow(newNumStr, 3);
    } else if (currentOper === 'log') {
        calcScreen.value = Math.log(newNumStr);
    } else if (currentOper === 'sin') {
        calcScreen.value = Math.sin(newNumStr);
    } else if (currentOper === 'cos') {
        calcScreen.value = Math.cos(newNumStr);
    } else if (currentOper === 'tan') {
        calcScreen.value = Math.tan(newNumStr);
    } else if (currentOper === 'sinh') {
        calcScreen.value = Math.sinh(newNumStr);
    } else if (currentOper === 'cosh') {
        calcScreen.value = Math.cosh(newNumStr);
    } else if (currentOper === 'tanh') {
        calcScreen.value = Math.tanh(newNumStr);
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




