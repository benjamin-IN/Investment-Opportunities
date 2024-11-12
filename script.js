// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Submission with Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple form validation
    if (name === "" || email === "" || message === "") {
        document.getElementById('formMessage').textContent = "Please fill in all fields.";
        document.getElementById('formMessage').style.color = "red";
    } else {
        document.getElementById('formMessage').textContent = "Thank you for reaching out! We will get back to you soon.";
        document.getElementById('formMessage').style.color = "green";

        // Reset form
        document.getElementById('contactForm').reset();
    }
});
