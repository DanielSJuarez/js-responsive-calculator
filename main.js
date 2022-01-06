const keyNum = document.querySelectorAll('.number');
const operNum = document.querySelectorAll('.operator');
const eqlOper = document.querySelector('.equal-sign');
const clr = document.querySelector('.clear');
const calcScreen = document.querySelector('.calculator-screen');

let calculation = [];
calcValue = '';
calcScreen.disable = true;

keyNum.forEach(function (keyNum) {
    keyNum.addEventListener('click', function pushNumber(event) {
        //alert(keyNum.value);
        calculation.push(keyNum.value);
        calcScreen.value = calculation.join('');
    })
});

operNum.forEach(function (operNum) {
    operNum.addEventListener('click', function pushOperator(event) {
        //alert(operNum.value);
        calculation.push(operNum.value);
        calcScreen.value = calculation.join('');
    })
});

eqlOper.addEventListener('click', function calculate(event) {
    //alert(eqlOper.value);
    for (let i = 0; i < calculation.length; i++) {
        calcValue = calcValue + calculation[i];
    }
    //alert(eval(calcValue));
    calcScreen.value = eval(calcValue);
})


clr.addEventListener('click', function clear(event) {
    //alert(clr.value);'
    calculation = [];
    calcValue = '';
    calcScreen.value = 0
})



//replace eval
//change the input to calcscreen to replace ','