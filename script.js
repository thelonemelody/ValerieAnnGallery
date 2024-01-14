
document.addEventListener("DOMContentLoaded", function() {
    displayText(); // Call displayText function when the page loads
});

function displayText() {
    var numberInput = document.getElementById("numberInput").value;
    var resultDiv = document.getElementById("result");

    // Read data from the remote JSON file
    readTextFile("https://thelonemelody.github.io/ValerieAnnGallery/responses.json", function(response) {
        try {
            var data = JSON.parse(response);

            if (numberInput === "") {
                // Check for the "no_value" entry
                var noValueEntry = data.find(function(entry) {
                    return entry.doc_key === "no_value";
                });

                if (noValueEntry) {
                    var title = noValueEntry.title;
                    var body = noValueEntry.body;
                    resultDiv.innerHTML = `<div class='response'><span class='title'>${title}:</span><br><span class='body-text'>${body}</span></div>`;
                } else {
                    resultDiv.innerHTML = "<div class='response'><span class='title'>Error:</span> Entry not found for the specified doc_key.</div>";
                }
            } else {
                var foundEntry = data.find(function(entry) {
                    return entry.doc_key === numberInput;
                });

                if (foundEntry) {
                    var title = foundEntry.title;
                    var body = foundEntry.body;
                    resultDiv.innerHTML = `<div class='response'><span class='title'>${title}:</span><br><span class='body-text'>${body}</span></div>`;
                } else {
                    // Check for default entry
                    var defaultEntry = data.find(function(entry) {
                        return entry.doc_key === "default";
                    });

                    if (defaultEntry) {
                        var title = defaultEntry.title;
                        var body = defaultEntry.body;
                        resultDiv.innerHTML = `<div class='response'><span class='title'>${title}:</span><br><span class='body-text'>${body}</span></div>`;
                    } else {
                        resultDiv.innerHTML = "<div class='response'><span class='title'>Error:</span> Entry not found for the specified doc_key.</div>";
                    }
                }
            }
        } catch (error) {
            resultDiv.innerHTML = "<div class='response'><span class='title'>Error:</span> Invalid response format.</div>";
        }
    });
}


function readTextFile(fileURL, callback) {
    fetch(fileURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            callback(data);
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });
}