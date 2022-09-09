var inputText = document.querySelector("#input-text");
var submitButton = document.querySelector("#submit-btn");
var redButton = document.querySelector("#red");
var blueButton = document.querySelector("#blue");
var greenButton = document.querySelector("#green");
var outputRef = document.getElementById("outputRef");

submitButton.addEventListener("click", function submit() {
  outputRef.innerText = inputText.value;
});

redButton.addEventListener("click", function red() {
    outputRef.style.color = "red";
})

greenButton.addEventListener("click", function green() {
    outputRef.style.color = "green";
})

blueButton.addEventListener("click", function blue() {
    outputRef.style.color = "blue";
})


