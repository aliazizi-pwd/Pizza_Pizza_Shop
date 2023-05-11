const next = document.querySelectorAll(".next");
const previous = document.querySelectorAll(".Previous");
const slider = document.querySelectorAll(".slider");
let count = 0;

function stopSlider() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
}

next.forEach((btnItem) => {
    btnItem.addEventListener("click" , (e) => {
        e.preventDefault();
        stopSlider();
        count++;
        if (count === slider.length) {
            count = 0;
        }
        slider[count].style.display = "block";
    });
});

previous.forEach((btnItem) => {
    btnItem.addEventListener("click" , (e) => {
        e.preventDefault();
        count--;
        if (count < 0) {
            count = slider.length - 1;
        }
        stopSlider();
        slider[count].style.display = "block";
    });
});



// about webSite

const listAbout = document.querySelectorAll(".slider-focus");
const nextAboutBtn = document.querySelectorAll(".next-slide");
const previousAboutBtn = document.querySelectorAll(".Previous-slide");
let counter = 0;

function stopSliderAbout() {
  for (let i = 0; i < listAbout.length; i++) {
    listAbout[i].style.display = "none";
  }
}


nextAboutBtn.forEach((item) => {
    item.addEventListener('click' , (e) => {
      e.preventDefault();
      stopSliderAbout();
      counter++;
      if (counter == listAbout.length) {
        counter = 0;
      }
      listAbout[counter].style.display = "block";
    });
});

previousAboutBtn.forEach((item) => {
    item.addEventListener('click' , (e) => {
        e.preventDefault();
        counter--;
        if (counter < 0) {
            counter = listAbout.length - 1;
        }
        stopSliderAbout();
        listAbout[counter].style.display = "block";
    });
});