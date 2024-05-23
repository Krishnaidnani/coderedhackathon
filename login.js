// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const phone = document.getElementById('phone').value;
        const location = document.getElementById('location').value;

        // Validate password match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // You can perform additional validation here before submitting the form
        // For simplicity, let's just log the values for now
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Phone:', phone);
        console.log('Location:', location);

        // Optionally, you can submit the form to a server using fetch or XMLHttpRequest
        // Example:
        // fetch('https://example.com/signup', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ name, email, password, phone, location })
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
    });
});
