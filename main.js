const nav = document.getElementById("nav");
const iconMenu = document.querySelector(".icon-menu");
const iconMenuClose = document.querySelector(".icon-menu-close");

iconMenu.addEventListener("click", () => {
    nav.classList.add("visible");
});

iconMenuClose.addEventListener("click", () => {
    nav.classList.remove("visible");  
});