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
        if (count === slider.length - 1) {
            count = 0;
        }
        count++;
        slider[count].style.display = "block";
    });
});

previous.forEach((btnItem) => {
    btnItem.addEventListener("click" , (e) => {
        e.preventDefault();
        stopSlider();
        if (count <= 0) {
            count = slider.length;
        }
        count--;
        slider[count].style.display = "block";
    });
});