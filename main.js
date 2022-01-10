const keyNum = document.querySelectorAll('.number');
const operNum = document.querySelectorAll('.operator');
const sciOper = document.querySelectorAll('.sci-ops');
const powNum = document.querySelectorAll('.pow-num');

const eqlOper = document.querySelector('.equal-sign');
const clr = document.querySelector('.clear');
const calcScreen = document.querySelector('.calculator-screen');
const prct = document.querySelector('.percent');
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
})


prct.addEventListener('click', function pushPercent(event) {
    calculation.push(prct.value);
    currentNumber.push(prct.value);
    calcScreen.value = calculation.join('');
})


deci.addEventListener('click', function pushDeci(event) {
    calculation.push(deci.value);
    currentNumber.push(deci.value);
    calcScreen.value = calculation.join('');
})

posNeg.addEventListener('click', function pushPosNeg(event) {
    //only added changes the positive/negative status while a number is in currentNumber and before a currentOper is set
    if (currentNumber.includes('-')) {
        currentNumber.splice(0,1);
        calculation.splice(0,1);
        calcScreen.value = calculation.join('')
    } else {
        calculation.unshift(posNeg.value);
        currentNumber.unshift(posNeg.value);
        calcScreen.value = calculation.join('')
    }
})

sciOper.forEach(function (sciOper) {
    sciOper.addEventListener('click', function pushSciOper(event) {
        calculation.push(sciOper.value);
        currentOper = sciOper.value;
        oldNumber = currentNumber;
        currentNumber = [];
        calcScreen.value = calculation.join('');
    })
})

powNum.forEach(function (powNum) {
    powNum.addEventListener('click', function pushPowerOper(event) {
        calculation.push(powNum.value);
        currentOper = powNum.value;
        currentNumber.push(powNum.value);
        calcScreen.value = calculation.join('');
    })
})

operNum.forEach(function (operNum) {
    operNum.addEventListener('click', function pushOperator(event) {
        calculation.push(operNum.value);
        currentOper = operNum.value;
        oldNumber = currentNumber;
        currentNumber = [];
        calcScreen.value = calculation.join('');
    })
})

eqlOper.addEventListener('click', function calculate(event) {

    let oldNumStr;
    let newNumStr;

    if (oldNumber.toString() === 'π') {
        oldNumStr = Math.PI;
    } else if (oldNumber.toString() === 'e') {
        oldNumStr = Math.E;
    } else if (oldNumber.includes('%')) {
        oldNumber.splice(-1)
        oldNumStr = parseFloat(oldNumber.join('').toString()) / 100;
    } else {
        oldNumStr = parseFloat(oldNumber.join('').toString());
    }

    if (currentNumber.toString() === 'π') {
        newNumStr = Math.PI;
    } else if (currentNumber.toString() === 'e') {
        newNumStr = Math.E;
    } else if (currentNumber.includes('%')) {
        currentNumber.splice(-1)
        newNumStr = parseFloat(currentNumber.join('').toString()) / 100;
    } else {
        newNumStr = parseFloat(currentNumber.join('').toString());
    }

    if (currentOper === '+') {
        calcScreen.value = oldNumStr + newNumStr;
    } else if (currentOper === '-') {
        calcScreen.value = oldNumStr - newNumStr;
    } else if (currentOper === '*') {
        calcScreen.value = oldNumStr * newNumStr;
    } else if (currentOper === '/') {
        calcScreen.value = oldNumStr / newNumStr;
    } else if (currentOper === '√') {
        calcScreen.value = Math.sqrt(newNumStr);
    } else if (currentOper === '∛') {
        calcScreen.value = Math.cbrt(newNumStr);
    } else if (currentOper === 'x√') {
        calcScreen.value = oldNumStr * Math.sqrt(newNumStr);
    } else if (currentOper === '²') {
        calcScreen.value = Math.pow(newNumStr, 2);
    } else if (currentOper === '³') {
        calcScreen.value = Math.pow(newNumStr, 3);
    } else if (currentOper === '^') {
        calcScreen.value = Math.pow(oldNumStr, newNumStr);
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
    } else if (currentOper === '') {
        calcScreen.value = newNumStr;
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




