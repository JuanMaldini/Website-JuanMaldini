const navBurguer = document.querySelector(".navBurguer");
const navRight = document.querySelector(".navRight");

// Show the menu when hovering over the icon or the menu itself
navBurguer.addEventListener("click", () => {
    navRight.classList.add("active");
    navBurguer.classList.add("active");
});

// Hide the menu when the mouse leaves the menu
navRight.addEventListener("mouseleave", () => {
    navRight.classList.remove("active");
    navBurguer.classList.remove("active");
});