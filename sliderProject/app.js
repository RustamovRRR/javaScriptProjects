const slided = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

slided.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
