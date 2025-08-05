function animatePacman() {
    const pacman = document.getElementById("pacman");
    const navSection = document.getElementById("header_nav_section");
    const navRect = navSection.getBoundingClientRect();

    pacman.style.top = `${navRect.top + window.scrollY + navSection.offsetHeight + 10}px`;
    pacman.style.left = "-100px";
    pacman.style.display = "block";

    pacman.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(110vw)' }
    ], {
        duration: 2000,
        easing: 'linear'
    });

    setTimeout(() => {
        pacman.style.display = "none";
    }, 2500);
}

let pacmanVisible = false;

window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    const headerTop = header.offsetTop;
    const headerBottom = headerTop + header.offsetHeight;
    const fromTop = window.scrollY + window.innerHeight / 2;

    if (fromTop >= headerTop && fromTop < headerBottom) {
        if (!pacmanVisible) {
            animatePacman();
            pacmanVisible = true;
        }
    } else {
        pacmanVisible = false;
    }
});