var input = document.querySelector("#input-password");
var submitBtn = document.querySelector("#btn-submit");
var outputRef = document.querySelector("#output");

function clickHandler() {
    var inputPassword = (input.value);
    var length = inputPassword.length
    console.log(length);

    if(length < 10){
        outputRef.innerHTML = "Password must have at least 10 characters.";
        outputRef.style.color = "red"
    } else {
        outputRef.innerHTML = "Successful"
        outputRef.style.color = "green"
    }
}

submitBtn.addEventListener("click", clickHandler)