console.log("Modal script loaded");


// hamburger menu açmak için gerekli olan fonksiyon

const hamburgerOpenButton = document.getElementById("hamburger-menu-open-button");
const hamburgermenu = document.getElementById("hamburger-menu");
const hamburgerCloseButton = document.getElementById("hamburger-menu-close-button");



hamburgerOpenButton.addEventListener("click", function () {
  hamburgermenu.classList.add("is-open-menu");
});

hamburgerCloseButton.addEventListener("click", function () {
  hamburgermenu.classList.remove("is-open-menu");
});




const ModalMenu = document.getElementById("modal-menu");
const modalCloseButton = document.getElementById("modal-close-button");
const modalOpenButton = document.getElementById("modal-open-button");


modalOpenButton.addEventListener("click", function () {
  ModalMenu.classList.add("-is-open");
});

modalCloseButton.addEventListener("click", function () {
  ModalMenu.remove("-is-open");
});


modalOpenButton.addEventListener()