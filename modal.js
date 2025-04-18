
// hamburger menu açmak için gerekli olan fonksiyon

const hamburgerOpenButton = document.getElementById("hamburger-menu-open-button");
const hamburgermenu = document.getElementById("hamburger-menu");
const hamburgerCloseButton = document.getElementById("hamburger-menu-close-button");


hamburgerOpenButton.addEventListener("click", function () {
  hamburgermenu.classList.add("hamburger-menu-is-open");
});

hamburgerCloseButton.addEventListener("click", function () {
  hamburgermenu.classList.remove("hamburger-menu-is-open");
});

// modal açmak için gerekli olan fonksiyon
const ModalMenu = document.getElementById("modal-menu");
const modalCloseButton = document.getElementById("modal-close-button");
const modalOpenButton = document.getElementById("modal-open-button");


modalOpenButton.addEventListener("click", function () {
  ModalMenu.classList.add("backdrop-is-open");
});

modalCloseButton.addEventListener("click", function () {
  ModalMenu.remove("backdrop-is-open");
});
