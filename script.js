//icon menu for small screens
const hamburgerMenu = document.querySelector(".icon-menu");
const navbar = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

//tab
const tabMenu = document.querySelectorAll(".tab");
tabMenu.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove the 'active' class from all tabs
    tabMenu.forEach((t) => {
      t.classList.remove("active");
    });
    // Add the 'active' class to the clicked tab
    tab.classList.toggle("active");
  });
});
