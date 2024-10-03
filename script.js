// script.js

// Select the navbar
const navbar = document.getElementById('navbar');

// Add scroll event listener to the window
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // If page is scrolled more than 50px
        navbar.classList.add('scrolled'); // Add the scrolled class
    } else {
        navbar.classList.remove('scrolled'); // Remove the scrolled class
    }
});
