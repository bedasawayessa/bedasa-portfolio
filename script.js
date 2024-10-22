document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: targetSection.offsetTop - 60, // Offset for header
      behavior: "smooth",
    });
  });
});

// Update footer year dynamically
document.getElementById("year").textContent = new Date().getFullYear();
