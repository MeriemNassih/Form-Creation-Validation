// Asynchronous function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // HTML element to display the data

    try {
        const response = await fetch(apiUrl); // API call
        const users = await response.json(); // Convert the response to JSON

        dataContainer.innerHTML = ''; // Clear the "Loading..." message

        // Create a list of users
        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Display the user's name
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList); // Append the list to the page
    } catch (error) {
        // If an error occurs, display a failure message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Execute the function once the page has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
