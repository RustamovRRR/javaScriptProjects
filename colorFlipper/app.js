// declaring array
const colors = ["green", "red", "blue", "orange", "pink", "yellow"];

// selecting elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// adding event listner to the button
btn.addEventListener("click", function () {
  let randomNumber = randomNumberGenerator();

  document.body.style.backgroundColor = colors[randomNumber];
  color.style.color = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// using math floor and random methdos to generate random numbers between 0 and the lenght of colors array
function randomNumberGenerator() {
  return Math.floor(Math.random() * colors.length);
}
