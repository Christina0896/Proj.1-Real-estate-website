//icon menu for small screens

//tab options
const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
  });
});
//advanced filters curtain
/* Open when someone clicks on the span element */
function openNav() {
  document.querySelector('.curtain-menu').style.display = 'block';
}
function closeNav() {
  document.querySelector('.curtain-menu').style.display = 'none';
}
