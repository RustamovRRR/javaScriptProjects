//using selectors inside the element

// selecting all questions
const questions = document.querySelectorAll(".question");

// using forEach method for loop single question
questions.forEach(function (question) {
  // selecting button from inside the element
  const btn = question.querySelector(".question-btn");

  //   adding event listner to the buttons
  btn.addEventListener("click", function () {
    //closing other questions
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// traversing the dom

// selecting all question btns
// const btns = document.querySelectorAll(".question-btn");

// // using forEach method
// btns.forEach(function (btn) {
//   // adding event listner each btn and using event object
//   btn.addEventListener("click", function (e) {
//     // using DOM traversing with parentElement property
//     const question = e.currentTarget.parentElement.parentElement;
//     // using toggle method of classList property
//     question.classList.toggle("show-text");
//   });
// });
