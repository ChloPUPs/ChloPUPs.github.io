const getSubmitNumbers = document.getElementById("submitNumbers");
const getNumber1 = document.getElementById("number1");
const getNumber2 = document.getElementById("number2");
const getAnswer = document.getElementById("answer");

submitNumbers.onclick = function(){
    let number1 = getNumber1.value;
    let number2 = getNumber2.value;
    number1 = Number(number1);
    number2 = Number(number2);
    let answer = number1 * number2;
    getAnswer.textContent = answer;
}