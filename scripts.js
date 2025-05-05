
document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");
  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, options);

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });

  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for contacting Brandly!");
  });
});
