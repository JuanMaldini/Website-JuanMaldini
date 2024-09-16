const navBurguer = document.querySelector(".navBurguer");
const navRight = document.querySelector(".navRight");

// Mostrar el menú cuando haces clic en el ícono o cuando pasas el cursor sobre él.
navBurguer.addEventListener("click", () => {
    navRight.classList.add("active");
});

navBurguer.addEventListener("mouseenter", () => {
    navRight.classList.add("active");
});

// Ocultar el menú cuando el cursor se mueve fuera del menú (navRight).
navRight.addEventListener("mouseleave", () => {
    navRight.classList.remove("active");
});