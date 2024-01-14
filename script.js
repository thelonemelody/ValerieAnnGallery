document.addEventListener("DOMContentLoaded", function() {
    displayText(); // Call displayText function when the page loads
});
function displayText() {
    var numberInput = document.getElementById("numberInput").value;
    var resultDiv = document.getElementById("result");

    if (numberInput === "") {
        resultDiv.innerHTML = `<div class='response'>
                               <span class='title'>Less is more</span>
                               <br>
                               <span class='body-text'>Why?</span>
                               </div>`;
    } else {
        var title, bodyText;
        switch (parseInt(numberInput)) {
            case 1:
                title = "Number One";
                bodyText = "You entered the number One.";
                break;
            case 2:
                title = "Number Two";
                bodyText = "You entered the number Two.";
                break;
            case 3:
                title = "Number Three";
                bodyText = "You entered the number Three.";
                break;
            default:
                title = "Greater than Three";
                bodyText = "You entered a number greater than 3.";
                break;
        }

        resultDiv.innerHTML = `<div class='response'>
                               <span class='title'>${title}:</span>
                               <br>
                               <span class='body-text'>${bodyText}</span>
                               </div>`;
    }
}
