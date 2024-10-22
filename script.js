document.addEventListener("DOMContentLoaded", () => {
  const carouselSlides = document.querySelectorAll(".carousel-slide");
  let currentSlide = 0;

  const showSlide = (index) => {
    carouselSlides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0"; // Show current slide
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % carouselSlides.length; // Loop through slides
    showSlide(currentSlide);
  };

  // Show the first slide initially
  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // Change slide every 5 seconds

  // Update the footer year dynamically
  const yearElement = document.getElementById("year");
  yearElement.textContent = new Date().getFullYear();
});
