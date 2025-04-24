
// ABRIR Y CERRAR EL MENU DE NAV.
const navMenu   = document.getElementById("nav__menu");
const burger    = document.getElementById("burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  navMenu.classList.toggle("nav__menu--active");
})

// Cerrar el menu al hacer click en los enlaces.
document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", () => {
  burger.classList.remove("burger--active");
  navMenu.classList.remove("nav__menu--active");
})) 

// Cerrar el menu al hacer click fuera. 
  document.addEventListener("click", e => {
    if(!navMenu.contains(e.target) && e.target !== burger) {
      burger.classList.remove("burger--active")
      navMenu.classList.remove("nav__menu--active")
    }
  })

// AÑADIR BORDE ROJO FORM INPUT INVALID
document.getElementById("form__button").addEventListener("click", () => {
  document.getElementById("contacto__form").className="form__submitted"
})

