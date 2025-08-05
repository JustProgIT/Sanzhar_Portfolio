const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }

    const aboutMe = document.getElementById("about_me");
    const skills = document.getElementById("skills");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");

    const fromTop = window.scrollY + window.innerHeight / 2;

    toTopBtn.classList.remove("red", "purple", "cyan", "orange");

    if (fromTop >= aboutMe.offsetTop && fromTop < skills.offsetTop) {
        toTopBtn.classList.add("red");
    } else if (fromTop >= skills.offsetTop && fromTop < projects.offsetTop) {
        toTopBtn.classList.add("purple");
    } else if (fromTop >= projects.offsetTop && fromTop < contact.offsetTop) {
        toTopBtn.classList.add("cyan");
    } else if (fromTop >= contact.offsetTop) {
        toTopBtn.classList.add("orange");
    }
});