const projects = [
{
    image: "images/library_robot.jpg",
    title: "Library Robot",
    description: "An autonomous mobile robot designed to navigate books in the library. It scans all the shelfs and later generates a report which identifies misplaced books."
},
{
    image: "images/combat_robot.jpg",
    title: "Combat Robot",
    description: "A robot controlled using a remote controller, designed for fighting other such robots. Me and my team are building this for a Combat Robot Competition. "
},
{
    image: "images/web_gentles.png",
    title: "Gentles Website",
    description: "A modern, responsive car service booking website built with HTML, CSS, and JavaScript.",
    link: "https://github.com/JustProgIT/Gentles-Website"
},
{
    image: "images/happy_birthday_card.png",
    title: "Birthday Cards Sender",
    description: "An autonomous program that sends birthday cards every day with the names of employees who have a birthday.",
    link: "https://github.com/JustProgIT/happy_birthday_sender"
},
{
    image: "images/No_Image_Available.jpg",
    title: "DataStation GUI",
    description: "This is a GUI for DataStation, a program that allows to pass the books to the library robot. So the robot will know what books it is scanning.",
    link: "https://github.com/JustProgIT/datastation"
},
{
    image: "images/pokemon_game.png",
    title: "Pokemon Game CLI",
    description: "This is a command-line interface for a Pokemon Java game, allowing users to interact with the game world through text commands.",
    link: "https://github.com/JustProgIT/pg1202-assignment-main"
},
];

let currentProjectIndex = 0;

function updateProjects() {
    const total = projects.length;
    const main = document.getElementById("main_project");
    const left = document.getElementById("left_project");
    const right = document.getElementById("right_project");
    const title = document.getElementById("project_title");
    const overlayText = document.getElementById("project_overlay_text");
    const projectLink = document.getElementById("project_link");

    const currentProject = projects[currentProjectIndex];

    title.textContent = currentProject.title;
    overlayText.textContent = currentProject.description;
    main.src = currentProject.image;

    // GitHub Link handling
    if (currentProject.link) {
        projectLink.href = currentProject.link;
        projectLink.style.display = "inline-block";
        projectLink.textContent = "View on GitHub";
    } else {
        projectLink.style.display = "none";
    }

    left.src = projects[(currentProjectIndex - 1 + total) % total].image;
    right.src = projects[(currentProjectIndex + 1) % total].image;
}

updateProjects();

const hpLevels = [
    "images/hp_0.svg",
    "images/hp_33.svg",
    "images/hp_66.svg",
    "images/hp_full.svg"
];
let hpIndex = 0;

function updateHP() {
    const hpBar = document.getElementById("project_hp_image");
    hpBar.src = hpLevels[hpIndex];
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProjects();
    if (hpIndex < hpLevels.length - 1) hpIndex++;
    updateHP();
    createPopup("+10", true);
}

function prevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProjects();
    if (hpIndex > 0) hpIndex--;
    updateHP();
    createPopup("-10", false);
}


function createPopup(text, isPositive) {
    const popup = document.createElement("div");
    popup.classList.add("stat_popup");
    if (!isPositive) popup.classList.add("negative");
    popup.textContent = text;
    
    document.getElementById("projects").appendChild(popup);
    setTimeout(() => {
        popup.remove();
    }, 1500);
}