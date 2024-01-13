function displayText() {
    var numberInput = document.getElementById("numberInput").value;
    var resultDiv = document.getElementById("result");

    if (numberInput === "") {
        resultDiv.textContent = "Please enter a number.";
    } else {
        switch (parseInt(numberInput)) {
            case 1:
                resultDiv.textContent = "You entered One.";
                break;
            case 2:
                resultDiv.textContent = "You entered Two.";
                break;
            case 3:
                resultDiv.textContent = "You entered Three.";
                break;
            default:
                resultDiv.textContent = "You entered a number greater than 3.";
                break;
        }
    }
}
