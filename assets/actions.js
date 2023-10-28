window.onscroll = function () {
    var navbar = document.getElementById("myNavbar");
    var contentDiv = document.querySelector(".content-div");
    var navbarHeight = navbar.offsetHeight;

    if (window.scrollY >= contentDiv.offsetTop + contentDiv.offsetHeight) {
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("fixed-top");
    }
};

// Az oldal betöltésekor ellenőrizzük a mentett nyelv cookie-t és alkalmazzuk a megfelelő nyelvet
document.addEventListener("DOMContentLoaded", function () {
    const languageSelect = document.getElementById("language-select");
    const navbarMainNavigator = document.querySelector(".navbar-main-navigator");

    const selectedLanguage = getLanguage();

    // Alapértelmezett nyelv
    if (selectedLanguage === "hu") {
        navbarMainNavigator.textContent = "Főoldal";
        navbarMainNavigator.classList.add("nav-item")
    } else if (selectedLanguage === "en") {
        navbarMainNavigator.textContent = "Home";
        navbarMainNavigator.classList.add("nav-item")
    }

    // Nyelvválasztás eseménykezelő
    languageSelect.addEventListener("change", function () {
        const selectedLanguage = languageSelect.value;
        setLanguage(selectedLanguage);

        if (selectedLanguage === "hu") {
            navbarMainNavigator.textContent = "Főoldal";
            navbarMainNavigator.classList.add("nav-item")
        } else if (selectedLanguage === "en") {
            navbarMainNavigator.textContent = "Home";
            navbarMainNavigator.classList.add("nav-item")
        }
    });
});

// Cookie kezelése
function setLanguage(lang) {
    document.cookie = "language=" + lang;
}

function getLanguage() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === "language") {
            return value;
        }
    }
    return "hu"; // Alapértelmezett nyelv, ha nincs találat
}
