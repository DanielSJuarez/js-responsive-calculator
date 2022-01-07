const keyNum = document.querySelectorAll('.number');
const operNum = document.querySelectorAll('.operator');
const eqlOper = document.querySelector('.equal-sign');
const clr = document.querySelector('.clear');
const calcScreen = document.querySelector('.calculator-screen');

let calculation = [];
const compareNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const compareOper = ['+', '-', '*', '/'];
let oldNumber = [];
let currentOper = [];
let currentNumber = [];
let calcValue = '';
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
    //console.log(calculation.join(''));
    for (let i = 0; i < calculation.length; i++) {

        if(compareNum.includes(calculation[i])){
            currentNumber.push(calculation[i])
        } else if (compareOper.includes(calculation[i])){
            oldNumber = currentNumber;
            currentNumber = [];
        }

        if (currentOper = '+'){
            calcScreen.value = oldNumber + currentNumber;   
        } else if (currentOper = '-'){
            calcScreen.value = oldNumber - currentNumber;   
        } else if (currentOper = '*'){
            calcScreen.value = oldNumber * currentNumber;   
        } else if (currentOper = '/'){
            calcScreen.value = oldNumber / currentNumber;   
        } 
    }
})


clr.addEventListener('click', function clear(event) {
    //alert(clr.value);'
    calculation = [];
    oldNumber = [];
    currentOper = [];
    currentNumber = [];
    calcValue = '';
    calcScreen.value = 0
})



//replace eval
