window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".teste");

    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});