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
const navSliderDown = document.querySelectorAll(".nav-line");
moon.addEventListener("click" , displayDark);
brightness.addEventListener("click" , displayBrightness);


function displayDark() {
  moon.classList.add("d-none");
  brightness.classList.add("light");
  navbarBreach.classList.add("dark");
  tagA.forEach((item) => item.classList.add("text-light"));
  navSliderDown.forEach((item) => item.style.backgroundColor = "#000");
  bodyHTML.style.backgroundColor = "#000";
  bodyHTML.style.color = "#fff";
}

function displayBrightness() {
  moon.classList.remove("d-none");
  brightness.classList.remove("light");
  navbarBreach.classList.remove("dark");
  tagA.forEach((item) => item.classList.remove("text-light"));
  navSliderDown.forEach((item) => (item.style.backgroundColor = "#fff"));
  bodyHTML.style.backgroundColor = "#fff";
  bodyHTML.style.color = "#000";
}

// optional Box (open-box)
const openBox = document.querySelectorAll(".open-box");

openBox.forEach((item) => {
  item.addEventListener("click" , () => {
    let pages = item.parentElement;
    pages.querySelector(".data-show-1").classList.toggle("active");
    pages.querySelector(".plus").classList.toggle("d-none");
    pages.querySelector(".minus").classList.toggle("active");
  });
});


// Filter Foods (Panel Boxes)

const listItem = document.querySelectorAll(".img-card-panel");
const btnClickedFilter = document.querySelectorAll(".btn-clicked");

btnClickedFilter.forEach((btnItem) => {
  btnItem.addEventListener("click" , filterFoods);
});


function filterFoods(e) {
  const nameButton = e.target.name;
  listItem.forEach((itemFood) => {
    if (nameButton === "all") {
      itemFood.style.display = "block";
    }
    else if (itemFood.classList.contains(nameButton)) {
      itemFood.style.display = "block";
    } else {
      itemFood.style.display = "none";
    }
  });
}


