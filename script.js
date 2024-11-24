// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function () {
    console.log("Website Loaded!");

    // Example of a simple alert
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
    });
});