var loadingText = document.getElementById("loading");
var loadedButton = document.querySelector("#btn-hide");

loadedButton.addEventListener("click", function hide() {
    loadingText.style.display = "none";
})