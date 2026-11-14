const myButton = document.getElementById("myButton"); 
const myTextBox = document.getElementById("myTextBox"); 
const celciusToFarenheit = document.getElementById("celciusToFarenheit"); 
const FarenheitToCelcius = document.getElementById("FarenheitToCelcius");
const celciusToKelvin = document.getElementById("celciusToKelvin");
const resultElement = document.getElementById("resultElement"); 
const resetButton = document.getElementById("resetButton"); 

let temp;
let kelvin = 273;
myButton.onclick = function convert() {
    if (celciusToFarenheit.checked) {
        temp = Number(myTextBox.value);
        temp = (temp * 9/5)+32;
        resultElement.textContent = temp.toFixed(1) + "F";
    } else if (FarenheitToCelcius.checked) {
        temp = Number(myTextBox.value);
        temp = 5/9*(temp -32);
         resultElement.textContent = temp.toFixed(1) + "C"
    } else if (celciusToKelvin.checked) {
        temp = Number(myTextBox.value);
        temp = temp + kelvin;
         resultElement.textContent = temp.toFixed(1) + "C"
    }
     else {
        resultElement.textContent = "select a unit";
    }
}
resetButton.onclick = function reset() {
    temp = Number(myTextBox.value);
    resultElement.textContent = temp;
}




