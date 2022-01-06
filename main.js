const keyNum = document.querySelectorAll('.number');
const operNum = document.querySelectorAll('.operator');

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
