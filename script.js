let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

// Function to show a slide
function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => (slide.style.display = "none"));
  // Display the current slide
  slides[index].style.display = "block";
}

// Function to move to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
  showSlide(currentSlide);
}

// Start the carousel
function startCarousel() {
  showSlide(currentSlide); // Show the first slide initially
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Start the carousel when the DOM is loaded
document.addEventListener("DOMContentLoaded", startCarousel);
