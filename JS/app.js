let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  header.style.top = 50 + value /10 + "vh";
});
