// Simple welcome message (optional)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to FelixAffiliro 🚀");
});

// Smooth scroll for internal links (future-ready)
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
