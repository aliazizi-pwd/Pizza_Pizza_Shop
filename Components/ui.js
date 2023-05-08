// Start Code JavaScript Ui Project Online Food Store (Part Home)
const bodyHTML = document.querySelector("body");
const navbarBreach = document.querySelector(".navbar-breach");

// Select the tag (a)
const tagA = document.querySelector(".ul-navbar").querySelectorAll("a");
tagA.forEach((item) => {
  item.classList.add("menu");
});

const showLinks = document.querySelector(".link-show");
const btnLink = document.querySelector(".btn-link");
btnLink.addEventListener("click", displayLinks);

function displayLinks(e) {
  e.preventDefault();
  showLinks.classList.toggle("activeShow");
}


// Contoller Moon and Moon-Fill

const brightness = document.querySelector(".svg-brightness");
const moon = document.querySelector(".active-moon");
moon.addEventListener("click" , displayDark);
brightness.addEventListener("click" , displayBrightness);

function displayDark() {
    moon.classList.add("d-none");
    brightness.classList.add("light");
    navbarBreach.classList.add("dark");
    tagA.forEach((item) => item.classList.add("text-light"));
    bodyHTML.style.backgroundColor = "#000";
    bodyHTML.style.color = "#fff";
}

function displayBrightness() {
    moon.classList.remove("d-none");
    brightness.classList.remove("light");
    navbarBreach.classList.remove("dark");
    tagA.forEach((item) => item.classList.add("text-dark"));
    bodyHTML.style.backgroundColor = "#fff";
    bodyHTML.style.color = "#000";
}