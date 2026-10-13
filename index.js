const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const resultElement = document.getElementById("resultElement");
let age;
myButton.onclick = function () {

    age = myInput.value;
    if (age >= 60) {
        resultElement.textContent = "you are too old to have driver's licence";
    }
     else if (age >= 18) {
        resultElement.textContent = "you are qualified to have diver's licence";
    } 
    else{
       resultElement.textContent = "you must be 18+ to have diver's licence"; 

    }
    
}