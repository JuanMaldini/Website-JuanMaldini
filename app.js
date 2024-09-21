const navBurguer = document.querySelector(".navBurguer");
const navRight = document.querySelector(".navRight");

// Mostrar el menú cuando haces clic en el ícono.
navBurguer.addEventListener("click", () => {
    navRight.classList.add("active");
    navBurguer.classList.add("active");
});

// Ocultar el menú cuando el cursor salga del menú.
navRight.addEventListener("mouseleave", () => {
    navRight.classList.remove("active");
    navBurguer.classList.remove("active");
});

// Ocultar el menú cuando haces clic fuera de él.
document.addEventListener("click", (event) => {
    if (!navRight.contains(event.target) && !navBurguer.contains(event.target)) {
        navRight.classList.remove("active");
        navBurguer.classList.remove("active");
    }
});

// Seleccionar todas las tarjetas cardExperience
const cardExperiences = document.querySelectorAll('.cardExperience');

// Recorrer cada una de las cardExperience
cardExperiences.forEach(card => {
    // Comprobar si falta cardExperienceDescription
    const hasDescription = card.querySelector('.cardExperienceDescription') !== null;

    // Si no está presente, modificar layout
    if (!hasDescription) {
        card.classList.add('modified');
    } else {
        card.classList.remove('modified'); // Por si lo tiene en otros casos
    }
});
