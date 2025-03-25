// DOM Elements
const root = document.querySelector(":root") as HTMLElement;
const app = document.getElementById("app");
const footer = document.querySelector(".footer__wrapper");

const colorfulBtn = document.getElementById("colorful-btn");
const darkBtn = document.getElementById("dark-btn");

const mobileMenuBtn = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu__wrapper");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu__close-btn");

const aboutMeHeader = document.querySelector(".about__header");
const aboutMeExpandIcon = document.querySelector(".about__expand-icon");
const aboutMeText = document.querySelector(".about__text");

const professionalExperienceItems = document.querySelectorAll(".profexp__job-title");
const professionalExperienceDescriptions = document.querySelectorAll(".profexp__job-description");
const professionalExperienceDescriptionIcons = document.querySelectorAll(".profexp__expand-icon");

// Mobile Menu
mobileMenuBtn?.addEventListener("click", () => {
    mobileMenu?.classList.remove("hidden");
    app?.classList.add("hidden");
    footer?.classList.add("hidden");
});

mobileMenuCloseBtn?.addEventListener("click", () => {
    mobileMenu?.classList.add("hidden");
    app?.classList.remove("hidden");
    footer?.classList.remove("hidden");
});

// Theme Buttons
colorfulBtn?.addEventListener("click", () => {
    root?.style.removeProperty("--header-gradient");
    root?.style.removeProperty("--background-color");
    root?.style.removeProperty("--header-text-color");
    root?.style.removeProperty("--linebreak-color");
});

darkBtn?.addEventListener("click", () => {
    root?.style.setProperty("--header-gradient", "var(--header-gradient-dark)");
    root?.style.setProperty("--background-color", "var(--background-color-dark)");
    root?.style.setProperty("--header-text-color", "var(--header-text-color-dark)");
    root?.style.setProperty("--linebreak-color", "var(--linebreak-color-dark)");
    root?.style.setProperty("--footer-color", "var(--footer-color-dark)");
});

/////////////////////////////////////////

// About Me
aboutMeHeader?.addEventListener("click", () => {
    aboutMeText?.classList.toggle("hidden");
    aboutMeExpandIcon?.classList.toggle("rotate");
});

// Professional Experience
professionalExperienceItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        professionalExperienceDescriptions[index].classList.toggle("hidden");
        professionalExperienceDescriptionIcons[index].classList.toggle("rotate-90");
    });
});
