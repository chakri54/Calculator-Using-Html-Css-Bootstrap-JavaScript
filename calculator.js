// calculator.js

let resultInput = document.getElementById('result');

function appendToResult(value) {
    resultInput.value += value; // Append the clicked button value to the input
}

function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value); // Calculate the result
    } catch (e) {
        resultInput.value = 'Error'; // Handle any errors
    }
}

function clearResult() {
    resultInput.value = ''; // Clear the input
}
