let score = 0;
const scoreDisplay = document.getElementById("skills_instruction");
const skills = document.querySelectorAll(".skill_text");
const pewSound = document.getElementById("pewSound");

skills.forEach(skill => {
skill.addEventListener("click", () => {

    pewSound.currentTime = 0;
    pewSound.play();

    const explode = document.createElement("img");
    explode.src = "images/explode.gif";
    explode.style.position = "absolute";
    explode.style.left = skill.style.left;
    explode.style.top = skill.style.top;
    explode.style.width = "80px";
    explode.style.pointerEvents = "none";
    explode.style.zIndex = "5";
    document.getElementById("skills").appendChild(explode);

    skill.style.visibility = "hidden";

    score++;
    scoreDisplay.textContent = "Score: " + score;

    setTimeout(() => {
        explode.remove();
        skill.style.visibility = "visible";
    }, 3000);
});
});
