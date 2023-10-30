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
    const navbarWorksNavigator = document.querySelector(".navbar-works-navigator");
    const navbarBlogNavigator = document.querySelector(".navbar-blog-navigator");
    const navbarContactNavigator = document.querySelector(".navbar-contact-navigator");
    const introHeader = document.querySelector(".intro-header");
    const introFirstP = document.querySelector(".intro-first-p");
    const introSecondP = document.querySelector(".intro-second-p");
    const introThirdP = document.querySelector(".intro-third-p");

    const selectedLanguage = getLanguage();

    // Nyelvválasztás eseménykezelő
    languageSelect.addEventListener("change", function () {
        const selectedLanguage = languageSelect.value;
        setLanguage(selectedLanguage);

        if (selectedLanguage === "hu") {
            navbarMainNavigator.textContent = "Főoldal";
            navbarWorksNavigator.textContent = "Művek";
            navbarBlogNavigator.textContent = "Blog";
            navbarContactNavigator.textContent = "Elérhetőség";
            introHeader.textContent = "Bemutatkozás";
            introFirstP.textContent = "HULorem ipsum, dolor sit amet consectetur adipisicing elit. Earum laboriosam fugit consequatur ducimus. Eius sed libero, harum porro natus autem eaque dolor nobis sunt, error, nesciunt temporibus culpa illo tempore!";
            introSecondP.textContent = "HULorem ipsum, dolor sit amet consectetur adipisicing elit. Earum laboriosam fugit consequatur ducimus. Eius sed libero, harum porro natus autem eaque dolor nobis sunt, error, nesciunt temporibus culpa illo tempore!";
            introThirdP.textContent = "HULorem ipsum, dolor sit amet consectetur adipisicing elit. Earum laboriosam fugit consequatur ducimus. Eius sed libero, harum porro natus autem eaque dolor nobis sunt, error, nesciunt temporibus culpa illo tempore!";

        } else if (selectedLanguage === "en") {
            navbarMainNavigator.textContent = "Home";
            navbarWorksNavigator.textContent = "Works";
            navbarBlogNavigator.textContent = "Blog";
            navbarContactNavigator.textContent = "Contact";
            introHeader.textContent = "Itroduction";
            introFirstP.textContent = "ENGLorem ipsum, dolor sit amet consectetur adipisicing elit. Earum laboriosam fugit consequatur ducimus. Eius sed libero, harum porro natus autem eaque dolor nobis sunt, error, nesciunt temporibus culpa illo tempore!";
            introSecondP.textContent = "ENGLorem ipsum, dolor sit amet consectetur adipisicing elit. Earum laboriosam fugit consequatur ducimus. Eius sed libero, harum porro natus autem eaque dolor nobis sunt, error, nesciunt temporibus culpa illo tempore!";
            introThirdP.textContent = "ENGLorem ipsum, dolor sit amet consectetur adipisicing elit. Earum laboriosam fugit consequatur ducimus. Eius sed libero, harum porro natus autem eaque dolor nobis sunt, error, nesciunt temporibus culpa illo tempore!";

        }
    });
});

// Cookie kezelése
function setLanguage(lang) {
    document.cookie = `language=${lang}; path=/`; // A "path=/" beállítja az útvonalat, hogy az összes oldalon elérhető legyen
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