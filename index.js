const menuToggle = document.querySelector('.toggle-menu');
const nav = document.querySelector('.nav-links');

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});