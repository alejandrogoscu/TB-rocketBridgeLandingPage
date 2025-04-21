
// ABRIR Y CERRAR EL MENU DE NAV.
const navMenu   = document.getElementById("nav__menu");
const burger    = document.getElementById("burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  navMenu.classList.toggle("nav__menu--active");
})

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", () => {
  burger.classList.remove("burger--active");
  navMenu.classList.remove("nav__menu--active");
}))