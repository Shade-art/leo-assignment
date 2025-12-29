let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}


setInterval(nextSlide, 5000);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});
