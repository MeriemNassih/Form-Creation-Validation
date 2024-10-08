// Step 1: Wait for the entire page to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Step 2: Select the form and the division for displaying feedback messages
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Step 3: Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from being submitted

        // Step 4: Retrieve and clean up the values from the input fields
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Step 5: Validation variables
        let isValid = true; // This variable will track if everything is valid
        let messages = [];  // Stores error messages

        // Step 6: Validate the username
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Step 7: Validate the email
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Step 8: Validate the password
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Step 9: Display the feedback
        feedbackDiv.style.display = 'block'; // Show the feedback message division

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = '#28a745'; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Display each error message on a new line
            feedbackDiv.style.color = '#dc3545'; // Red color for errors
        }
    });
});
