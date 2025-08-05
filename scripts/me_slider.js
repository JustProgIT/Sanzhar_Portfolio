const images = [
    "images/sanzhar2.jpg",
    "images/sanzhar3.jpg",
    "images/sanzhar1.png",
];

let currentIndex = 0;
const slider = document.getElementById("about_me_image_slider");

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slider.src = images[currentIndex];
}, 3000);