
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-inner");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const images = document.querySelectorAll(".carousel-inner img");

  let index = 0;

  function updateCarousel() {
    const width = images[0].clientWidth;
    carousel.style.transform = `translateX(-${index * width}px)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);
  updateCarousel();
});
