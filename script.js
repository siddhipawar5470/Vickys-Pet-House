
/* Vicky's Pet House */

document.addEventListener("DOMContentLoaded", () => {

  // Smooth reveal when scrolling
  const revealElements = document.querySelectorAll(
    ".welcome, .pet-card, .product-item, .care-content, .care-image, .contact-section"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });

  // Contact button
  const contactButton = document.getElementById("contact-button");

  if (contactButton) {
    contactButton.addEventListener("click", (event) => {
      event.preventDefault();

      alert("Welcome to Vicky's Pet House! 🐾 Please add your contact details here soon.");
    });
  }

});
