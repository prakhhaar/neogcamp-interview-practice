var inputOne = document.querySelector("#input-one");
var inputTwo = document.querySelector("#input-two");
var addition = document.querySelector("#add");
var subtraction = document.querySelector("#subtract");
var multiplication = document.querySelector("#multiply");
var division = document.querySelector("#divide")
var output = document.querySelector("#output");

function add(){
    var one = Number(inputOne.value);
    var two = Number(inputTwo.value);
    var sum = one + two;
    console.log(sum);
}

addition.addEventListener("click", add);

function subtract(){
    var one = Number(inputOne.value);
    var two = Number(inputTwo.value);
    var diff = one - two;
    console.log(diff);
}

subtraction.addEventListener("click", subtract);

function multiply(){
    var one = Number(inputOne.value);
    var two = Number(inputTwo.value);
    var product = one * two;
    console.log(product);
}

multiplication.addEventListener("click", multiply);

function divide(){
    var one = Number(inputOne.value);
    var two = Number(inputTwo.value);
    var quo = one / two;
    console.log(quo);
}

division.addEventListener("click", divide);