// navbar fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const btnTop = document.querySelector("#btnTop");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    btnTop.classList.remove("hidden");
    btnTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    btnTop.classList.remove("flex");
    btnTop.classList.add("hidden");
  }
};

// hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    navMenu.classList.add("hidden");
    hamburger.classList.remove("hamburger-active");
  }
});

// toggle darkmode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  darkToggle.checked ? html.classList.add("dark") : html.classList.remove("dark");
  darkToggle.checked ? (localStorage.theme = "dark") : (localStorage.theme = "light");
});

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
