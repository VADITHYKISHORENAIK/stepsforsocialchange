// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Sticky Navbar Background on Scroll (Combined and Fixed)
const navbar = document.getElementById('navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
            navbar.style.padding = "5px 0"; 
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            navbar.style.padding = "10px 0"; 
        }
    });
}

// Banjara Culture Carousel (Auto-scroll every 15s)
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    
    // Safety check: Only run carousel logic if slides exist on the current page
    if (slides.length > 0) {
        let currentIndex = 0;

        function showNextSlide() {
            // Remove the 'active' class from the currently visible slide
            slides[currentIndex].classList.remove("active");
            
            // Calculate the next index, looping back to 0 if at the end
            currentIndex = (currentIndex + 1) % slides.length;
            
            // Add the 'active' class to the next slide to fade it in
            slides[currentIndex].classList.add("active");
        }

        // Execute the swap every 15 seconds (15000 ms)
        setInterval(showNextSlide, 15000);
    }
});