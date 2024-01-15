function submitForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate inputs (add more validation as needed)

    // Send data to the server
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server (e.g., display a success message)
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
