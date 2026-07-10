const menuBtn = document.querySelector("#menuBtn");            //query selectore is used for id and class it may catch the id by #id and can catch class as well like .class//
const navLinks = document.querySelector("#navLinks");
menuBtn.addEventListener("click", () => {
// add "open" if missing, remove it if present
navLinks.classList.toggle("open");
});