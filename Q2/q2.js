var inputText = document.querySelector("#input-text");
var submitButton = document.querySelector("#submit-btn");
var increaseSize = document.querySelector("#increase");
var decreaseSize = document.querySelector("#decrease");
var output = document.getElementById("output");
var outputRef = document.querySelector("#output")
var headingOne = document.querySelector("#h1");
var headingTwo = document.querySelector("#h2");
var headingThree = document.querySelector("#h3");

submitButton.addEventListener("click", function submitText() {
    output.innerText = inputText.value;
})

increaseSize.addEventListener("click", function increase() {
    output.style.fontSize = "xx-large";
})

decreaseSize.addEventListener("click", function decrease() {
    output.style.fontSize = "larger";
})

headingOne.addEventListener("click", function convertToHOne() {
    console.log("Clicked");
    outputRef.outerHTML = "<h1>" + outputRef.innerHTML + "<h1/>"    
})

headingTwo.addEventListener("click", function convertToHTwo() {
    console.log("Clicked");
    outputRef.outerHTML = "<h2>" + outputRef.innerHTML + "<h2/>"    
})

headingThree.addEventListener("click", function convertToHThree() {
    console.log("Clicked");
    outputRef.outerHTML = "<h3>" + outputRef.innerHTML + "<h3/>"    
})

