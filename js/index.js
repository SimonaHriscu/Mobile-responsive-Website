const hamburger = document.querySelector(".hamburger-line-menu");
const navLinks = document.querySelector(".menu-list");
const links = document.querySelector(".menu-list li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});