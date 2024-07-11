document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("question-form");
    const answerLabel = document.querySelector("#answer label");
    const answerDiv = document.getElementById("answer");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const question = document.getElementById("question").value;

        fetch('/get_answer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: question })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const answerParagraph = document.createElement('p');
            answerParagraph.textContent = data.answer;
            
            // Update answer section
            answerDiv.innerHTML = ''; // Clear previous content
            answerLabel.style.display = 'block'; // Show the answer label
            answerDiv.appendChild(answerLabel); // Append the answer label
            answerDiv.appendChild(answerParagraph); // Append the new answer
        })
        .catch(error => {
            console.error('Error:', error);
            answerLabel.style.display = 'none'; // Hide the answer label on error
            answerDiv.innerHTML = `<p>Sorry, something went wrong. Please try again.</p>`;
        });
    });
});
