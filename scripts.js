
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out! We'll be in touch.");
  this.reset();
});
