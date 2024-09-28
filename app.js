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

// Función que retorna true si el sistema está en modo oscuro
function estaEnModoOscuro() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
// Función que aplica la clase 'modo-oscuro' al elemento <html>
function aplicarModoOscuro() {
    const esModoOscuro = estaEnModoOscuro();
    console.log('¿Está en modo oscuro?:', esModoOscuro);  // Verifica el estado en la consola
    if (esModoOscuro) {
        document.documentElement.classList.add('modo-oscuro');  // Aplica la clase al <html>
    } else {
        document.documentElement.classList.remove('modo-oscuro');  // Quita la clase del <html>
    }
}
// Escuchar cambios en la preferencia de color del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', aplicarModoOscuro);
// Ejecutar la función al cargar la página
aplicarModoOscuro();

//Changing icon location index
const iconLocation = document.getElementById('imgLocation');
if (estaEnModoOscuro()) {
    iconLocation.src = "./assets/location-w.png";  // Cambia a ícono blanco si está en modo oscuro
} else {
    iconLocation.src = "./assets/location-b.png";  // Cambia a ícono negro si no está en modo oscuro
}
