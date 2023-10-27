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