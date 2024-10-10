//icon menu for small screens
const hamburgerMenu = document.querySelector(".icon-menu");
const navbar = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("open");
});
