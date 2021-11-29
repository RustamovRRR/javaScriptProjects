// setting initial values
let count = 0;

// selecting elements
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// using forEach method for selecing single btn

btns.forEach(function (btn) {
  // adding event listner to the single btn
  btn.addEventListener("click", function (e) {
    //   using event object with currentTarget property
    const singleButton = e.currentTarget.classList;
    // using classList contains method with if statement
    if (singleButton.contains("decrease")) {
      count--;
    } else if (singleButton.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // using only if statement in order to change value color
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    // assign color to the value element
    value.textContent = count;
  });
});
