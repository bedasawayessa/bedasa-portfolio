let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function startCarousel() {
  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

document.addEventListener("DOMContentLoaded", startCarousel);
