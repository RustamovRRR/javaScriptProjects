//using selectors inside the element
// traversing the dom

// selecting all question btns
const btns = document.querySelectorAll(".question-btn");

// using forEach method
btns.forEach(function (btn) {
  // adding event listner each btn and using event object
  btn.addEventListener("click", function (e) {
    // using DOM traversing with parentElement property
    const question = e.currentTarget.parentElement.parentElement;
    // using toggle method of classList property
    question.classList.toggle("show-text");
  });
});
