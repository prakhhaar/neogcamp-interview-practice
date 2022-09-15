var inputText = document.querySelector("#input-text");
var submitBtn = document.querySelector("#submit-btn");
var outputRef = document.querySelector("#output");

function clickHandler() {
    var input = inputText.value;

    var inputNum = Number(input.length);
    console.log(inputNum)

    if(inputNum > 5){
        outputRef.innerHTML = inputText.value;
        outputRef.style.color = "red";
    } else {
        outputRef.innerHTML = inputText.value;

    }
}

submitBtn.addEventListener("click", clickHandler)