console.log("Modal script loaded");


// hamburger menu açmak için gerekli olan fonksiyon

const hamburgerOpenButton = document.getElementById("hamburger-menu-open-button");
const hamburgermenu = document.getElementById("hamburger-menu");
const hamburgerCloseButton = document.getElementById("hamburger-menu-close-button");




hamburgerOpenButton.addEventListener("click", function() {
    hamburgermenu.classList.add("-is-open");
});