const inputs = document.querySelectorAll(".contact_input, textarea");
const emailInput = document.getElementById("email_input");
const heartsContainer = document.querySelector(".contact_hearts_row");

let submitButtonShown = false;
let submitTimeout;

function updateHearts() {
    let filledCount = 0;
    const hearts = document.querySelectorAll(".contact_hearts_img");

    if (inputs[0].value.trim() !== "") filledCount++;

    if (validateEmail(inputs[1].value.trim())) filledCount++;

    if (inputs[2].value.trim() !== "") filledCount++;

    hearts.forEach((heart, index) => {
        if (index < filledCount) {
            heart.src = "images/heart.svg";
        } else {
            heart.src = "images/heart_no.svg";
        }
    });

    if (filledCount === 3) {
        if (!submitButtonShown && !submitTimeout) {
            submitTimeout = setTimeout(showSubmitButton, 3000);
        }
    } else {
        clearTimeout(submitTimeout);
        submitTimeout = null;
        if (submitButtonShown) {
            hideSubmitButton();
        }
    }
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function showSubmitButton() {
    heartsContainer.innerHTML = `
        <button class="submit_button">SEND MESSAGE</button>
    `;
    submitButtonShown = true;

    document.querySelector(".submit_button").addEventListener("click", () => {
        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Message sent!");
        }
    });
}

function hideSubmitButton() {
    heartsContainer.innerHTML = `
        <img src="images/heart_no.svg" alt="heart_no" class="contact_hearts_img">
        <img src="images/heart_no.svg" alt="heart_no" class="contact_hearts_img">
        <img src="images/heart_no.svg" alt="heart_no" class="contact_hearts_img">
    `;

    const hearts = document.querySelectorAll(".contact_hearts_img");

    if (inputs[0].value.trim() !== "") hearts[0].src = "images/heart.svg";
    if (validateEmail(inputs[1].value.trim())) hearts[1].src = "images/heart.svg";
    if (inputs[2].value.trim() !== "") hearts[2].src = "images/heart.svg";

    submitButtonShown = false;
}

inputs.forEach(input => {
    input.addEventListener("input", updateHearts);
});
