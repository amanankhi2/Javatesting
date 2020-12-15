const defaultValue = 0;
let currentResult = defaultValue ;

//  Convert user Input to number
function getUserInput(){
    return parseInt(userInput.value);
}

// Create formatted results
function createResults(operator,initialResult,enteredNumber){
    const calcDesc = `${initialResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calcDesc); // function from vendor file.
}

function add(){
    const oldresult = currentResult;
    currentResult = currentResult + getUserInput();
    createResults('+',oldresult,getUserInput());
}

function subtract(){
    const oldresult = currentResult;
    currentResult = currentResult - getUserInput();
    createResults('-',oldresult,getUserInput());
}

function multiply(){
    const oldresult = currentResult;
    currentResult = currentResult * getUserInput();
    createResults('*',oldresult,getUserInput());
}

function divide(){
    const oldresult = currentResult;
    currentResult = currentResult / getUserInput();
    createResults('/',oldresult,getUserInput());
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);