const keyNum = document.querySelectorAll('.number');
const operNum = document.querySelectorAll('.operator');
const eqlOper = document.querySelectorAll('.equal-sign');
const clr = document.querySelectorAll('.clear');


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

clr.forEach(function(clr){
    clr.addEventListener('click', function pushNumber(event) {
        alert(clr.textContent);
    }) 
});
