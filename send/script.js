// Initialize EmailJS
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    email.send('megala801561@gmail.com','https://dashboard.emailjs.com/verify-email', templateParams)
        .then(function(response) {
            document.getElementById('response').innerText = 'Email sent successfully!';
            console.log('SUCCESS!', response.status, response.text);
        });
});