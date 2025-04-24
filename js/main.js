
// ABRIR Y CERRAR EL MENU DE NAV.
const navMenu = document.getElementById("nav__menu");
const burger = document.getElementById("burger");

// Función para alternar el estado del menú
const toggleMenu = () => {
  burger.classList.toggle("burger--active");
  navMenu.classList.toggle("nav__menu--active");
};

// Función para cerrar el menú
const closeMenu = () => {
  burger.classList.remove("burger--active");
  navMenu.classList.remove("nav__menu--active");
};

// Event listener para el botón burger
burger.addEventListener("click", toggleMenu);

// Cerrar el menú al hacer click en los enlaces
document.querySelectorAll(".menu__link").forEach(link => 
  link.addEventListener("click", closeMenu)
);

// Cerrar el menú al hacer click fuera
document.addEventListener("click", e => {
  if (!navMenu.contains(e.target) && e.target !== burger) {
    closeMenu();
  }
});


// AÑADIR BORDE ROJO FORM INPUT INVALID.
document.getElementById("form__button").addEventListener("click", () => {
  document.getElementById("contacto__form").className="form__submitted"
})


// ROTAR EL ORDEN DE LAS TARJETAS CADA X SEGUNDOS.
function rotarCards() {
  const cardContainer = document.getElementById("card__container");
  cardContainer.appendChild(cardContainer.firstElementChild);
}

// Rotar o no según se cambia el ancho de la pantalla
let intervalId;
function rotarOnOff(e) {
  if (e.matches) {
    clearInterval(intervalId);
    intervalId = null;
  } else {
    if (!intervalId) {
      intervalId = setInterval(rotarCards, 4000);
    }
  }
}
// MediaQuery para rotar solo cuando sea la pantalla más grande de 1095px
const isMobile = window.matchMedia("(max-width: 1095px)");
isMobile.addEventListener("change", rotarOnOff);
rotarOnOff(isMobile);


// BOTÓN DE "Empieza el viaje" Y "Contacta con nosotros" LLEVA A CONTACTO.
const homeButton = document.getElementById("homeButton");
const serviciosButton = document.getElementById("serviciosButton");
const contacto = document.getElementById("contacto");

const scrollToContacto = () => {
  contacto.scrollIntoView({
    behavior: "smooth"
  });
};

homeButton.addEventListener("click", scrollToContacto);
serviciosButton.addEventListener("click", scrollToContacto);