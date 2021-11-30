const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  // using dateset id property
  const id = e.target.dataset.id;

  if (id) {
    //   removing active class from buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    //   removing active class from articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    // adding active class to the proper article
    const singleArticle = document.getElementById(id);
    singleArticle.classList.add("active");
  }
});
