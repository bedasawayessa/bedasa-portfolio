document.addEventListener("DOMContentLoaded", () => {
    // Carousel Functionality
    const carouselSlides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;
    let carouselInterval;

    const showSlide = (index) => {
        carouselSlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        showSlide(currentSlide);
    };

    const startCarousel = () => {
        carouselInterval = setInterval(nextSlide, 5000);
    };

    const stopCarousel = () => {
        clearInterval(carouselInterval);
    };

    const carousel = document.querySelector(".carousel");
    carousel.addEventListener("mouseenter", stopCarousel);
    carousel.addEventListener("mouseleave", startCarousel);

    // Show the first slide initially
    showSlide(currentSlide);
    startCarousel();

    // Form Validation
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate form submission
        alert("Message sent successfully!");
        contactForm.reset();
    });

    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Update the footer year dynamically
    const yearElement = document.getElementById("year");
    yearElement.textContent = new Date().getFullYear();
});
