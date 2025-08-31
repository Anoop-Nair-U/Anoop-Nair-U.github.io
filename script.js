// Dark mode toggle
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Section entrance animation
const sections = document.querySelectorAll(".section-animate");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

// Force scroll to top on refresh/reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Or in case some browsers ignore above, also run on load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => window.scrollTo(0, 0), 50);
});

