const keyNum = document.querySelectorAll('.number');
const operNum = document.querySelectorAll('.operator');
const eqlOper = document.querySelectorAll('.equal-sign');

let calculation = [];

keyNum.forEach(function(keyNum){
    keyNum.addEventListener('click', function pushNumber(event) {
        alert(keyNum.textContent);
    }) 
});

operNum.forEach(function(operNum){
    operNum.addEventListener('click', function pushNumber(event) {
        alert(operNum.textContent);
    }) 
});

eqlOper.forEach(function(eqlOper){
    eqlOper.addEventListener('click', function pushNumber(event) {
        alert(eqlOper.textContent);
    }) 
});
