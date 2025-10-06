const roles = ["user experience designer", "software developer", "data analyst", "technical product designer", "AI enthusiast", "interaction designer", "full stack developer", "user researcher"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delay = 2000;
const typingTextElement = document.querySelector(".typing-text");

function typeEffect() {
    const currentRole = roles[index];
    if (isDeleting) {
        typingTextElement.textContent = currentRole.substring(0, charIndex--);
    } else {
        typingTextElement.textContent = currentRole.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, delay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, typingSpeed);
});
