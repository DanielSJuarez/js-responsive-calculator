const keyNum = document.querySelectorAll('.number');
const operNum = document.querySelectorAll('.operator');
const eqlOper = document.querySelector('.equal-sign');
const clr = document.querySelector('.clear');
const calcScreen = document.querySelector('.calculator-screen');

let calculation = [];

keyNum.forEach(function (keyNum) {
    keyNum.addEventListener('click', function pushNumber(event) {
        alert(keyNum.value);
        calculation.push(keyNum.value);
        console.log(calculation);
    })
});

operNum.forEach(function (operNum) {
    operNum.addEventListener('click', function pushOperator(event) {
        alert(operNum.value);
        calculation.push(operNum.value);
        console.log(calculation);
    })
});

eqlOper.addEventListener('click', function calculate(event) {
    alert(eqlOper.value);
})


clr.addEventListener('click', function clear(event) {
    alert(clr.value);
})



