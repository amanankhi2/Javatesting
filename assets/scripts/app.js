const defaultValue = 0;
let currentResult = defaultValue ;
let userInputLogs = [];

//  Convert user Input to number
function getUserInput(){
    return parseInt(userInput.value);
}

// function to create logs
function writeToLog (
    operation,
    prevResult,
    operationNumber,
    newResult
){
    const userInputLog = {
        operation: operation,
        oldresult:prevResult,
        currentInput: operationNumber,
        result:newResult
    };
    userInputLogs.push(userInputLog);
    console.log(userInputLogs);
}

// Create formatted results
function createResults(operator,initialResult,enteredNumber){
    const calcDesc = `${initialResult} ${operator} ${enteredNumber}`;
    outputResult(currentResult, calcDesc); // function from vendor file.
}

function add(){
    const oldresult = currentResult;
    const currentInput = getUserInput();
    currentResult = currentResult + currentInput;
    createResults('+',oldresult,currentInput);
    writeToLog('Add',oldresult,currentInput,currentResult);
}

function subtract(){
    const oldresult = currentResult;
    const currentInput = getUserInput();
    currentResult = currentResult - currentInput;
    createResults('-',oldresult,currentInput);
    writeToLog('Subtract',oldresult,currentInput,currentResult);
}

function multiply(){
    const oldresult = currentResult;
    const currentInput = getUserInput();
    currentResult = currentResult * currentInput;
    createResults('*',oldresult,currentInput);
    writeToLog('Multiply',oldresult,currentInput,currentResult);
}

function divide(){
    const oldresult = currentResult;
    const currentInput = getUserInput();
    currentResult = currentResult / currentInput;
    createResults('/',oldresult,currentInput);
    writeToLog('Divide',oldresult,currentInput,currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);