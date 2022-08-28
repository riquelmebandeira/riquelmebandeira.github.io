let show = true; 

const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.querySelector(".inline-list");

const toggleFunction = () => {
  menuSection.classList.toggle("on", show);
  show = !show;
}

menuToggle.addEventListener("click", toggleFunction);
navBar.addEventListener("click", toggleFunction);
