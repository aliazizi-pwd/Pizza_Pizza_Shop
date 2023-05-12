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
  tagA.forEach((item) => item.classList.remove("text-light"));
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



// panel Foods ()
const panelA = [];
const Traditional = document.querySelectorAll(".Traditional");
const pizza = document.querySelectorAll(".pizza");
const hamburger = document.querySelector(".hamburger");
const btnClicked = document.querySelectorAll(".btn-clicked");
const allFood = document.querySelectorAll(".img-card-panel");


function rundPanelFood () {
  let btnAll = document.querySelector(".btn-clicked-all");
  btnAll.addEventListener("click" , showAllFood);
  
  let btnPizza = document.querySelector(".btn-clicked-pizza");
  btnPizza.addEventListener("click" , showPizza);

  let btnhamburger = document.querySelector(".btn-clicked-hamburger");
  btnhamburger.addEventListener("click", showAllhamburger);
}

rundPanelFood();


function showPizza() {
  allFood.forEach((food) => {
    if (food.classList.contains("pizza") === true) {
        for (let i = 0; i < pizza.length; i++) {
          pizza[i].classList.add("active");
        }      
        for (let j = 0; j < Traditional.length; j++) {
          Traditional[j].classList.add("noactive");
        }
        for (let x = 0; x < hamburger.length; x++) {
          hamburger[x].classList.add("noactive");
        }
    }
  });
}


function showAllFood() {
  allFood.forEach((food) => {
    if (food.classList.contains("img-card-panel") === true) {
      for (let i = 0; i < pizza.length; i++) {
        pizza[i].classList.remove("noactive");
      }
    }
  });
}


function showAllhamburger() {
  allFood.forEach((food) => {
    if (food.classList.contains("hamburger") === true) {
      for (let i = 0; i < hamburger.length; i++) {
        
      }
    }
  });
}