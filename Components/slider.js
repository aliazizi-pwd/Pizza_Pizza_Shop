let next = document.querySelectorAll(".next");
let previous = document.querySelectorAll(".Previous");
let sliderAll = document.querySelectorAll(".slider");
let count = 0;


// stop
function stopSlider() {
    for (let i = 0; i < sliderAll.length; i++) {
        sliderAll[i].style.display = "none";
    }
}

// run Next
next.forEach((itemNext) => {
    itemNext.addEventListener('click' , nextSlider);
});

previous.forEach((itemPrevious) => {
    itemPrevious.addEventListener('click' , previousSlider);
});

function nextSlider(e) {
    e.preventDefault();
    stopSlider();
    if (count === sliderAll.length - 1) {
        count = 0;
    }
    count++;
    sliderAll[count].style.display = "block";
}

function previousSlider(e) {
    e.preventDefault();
    count--;
    if (count < 0) {
        count = sliderAll.length - 1;
    }
    stopSlider();
    sliderAll[count].style.display = "block";
}

