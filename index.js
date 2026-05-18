const menuToggle = document.querySelector('.toggle-menu');
const nav = document.querySelector('.nav-links');

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


const body = document.body;

const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const autoBtn = document.getElementById("autoBtn");

function removeActive() {
  lightBtn.classList.remove("active");
  darkBtn.classList.remove("active");
  autoBtn.classList.remove("active");
}

// dark mode
darkBtn.addEventListener("click", () => {
  body.classList.remove("light");
  body.classList.add("dark");
  removeActive();
  darkBtn.classList.add("active");
});


// light mode
lightBtn.addEventListener("click", () => {
  body.classList.remove("dark");
  body.classList.add("light");
  removeActive();
  lightBtn.classList.add("active");
});

// auto mode
autoBtn.addEventListener("click", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
  }

  removeActive();
  autoBtn.classList.add("active");
}); 