// selecting elemetns
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// adding event listener to the toggleBtn
toggleBtn.addEventListener("click", function () {
  // using toggle method
  sidebar.classList.toggle("show-sidebar");
});

// adding event listener to the closeBtn
closeBtn.addEventListener("click", function () {
  // using remove method
  sidebar.classList.remove("show-sidebar");
});
