window.addEventListener("scroll", function() {
    const navbarbig = document.querySelector(".divnavbar-big");
    const navbarmedium = document.querySelector(".divnavbar-medium");
    const navbarsmall = document.querySelector(".divnavbar-small");

    if (window.scrollY > 0) {
        navbarbig.classList.add("scrolled");
        navbarmedium.classList.add("scrolled");
        navbarsmall.classList.add("scrolled");
    } else {
        navbarbig.classList.remove("scrolled");
        navbarmedium.classList.remove("scrolled");
        navbarsmall.classList.remove("scrolled");
    }
});