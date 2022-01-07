const keyNum = document.querySelectorAll('.number');
const operNum = document.querySelectorAll('.operator');
const eqlOper = document.querySelector('.equal-sign');
const clr = document.querySelector('.clear');
const calcScreen = document.querySelector('.calculator-screen');

const compareNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const compareOper = ['+', '-', '*', '/'];
let calculation = [];
let oldNumber =[];
let currentOper = [];
let currentNumber = [];
let calcValue = '';
calcScreen.disable = true;

keyNum.forEach(function (keyNum) {
    keyNum.addEventListener('click', function pushNumber(event) {
        //alert(keyNum.value);
        calculation.push(keyNum.value);
        currentNumber.push(keyNum.value);
        calcScreen.value = calculation.join('');

    })
});

operNum.forEach(function (operNum) {
    operNum.addEventListener('click', function pushOperator(event) {
        //alert(operNum.value);
        calculation.push(operNum.value);
        currentOper.push(operNum.value);
        oldNumber = currentNumber;
        currentNumber = [];
        calcScreen.value = calculation.join('');
        //console.log(currentOper);
    })
});



eqlOper.addEventListener('click', function calculate(event) {
    //alert(eqlOper.value);
    //console.log(calculation.join(''));
    // for (let i = 0; i < calculation.length; i++) {
        //console.log(currentOper);
        //console.log(currentNumber)
        let oldNumStr = parseFloat(oldNumber.toString());
        let newNumStr = parseFloat(currentNumber.toString());
        //console.log(typeof newNumStr)
    
        if (currentOper = ['+']){
            calcScreen.value = oldNumStr + newNumStr;   
        } else if (currentOper = ['-']){
            calcScreen.value = oldNumStr - newNumStr;  
        } else if (currentOper = ['*']){
            calcScreen.value = oldNumStr * newNumStr;   
        } else if (currentOper = ['/']){
            calcScreen.value = oldNumStr / newNumStr;  
        } else {
            calcScreen.value = "Error";
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
