// cart and postion are required...
const logoClick = document.querySelector(".logo-passter");
const closeBtn = document.querySelector(".close-times");
const cartOne = document.querySelector(".poster-prdoucts-1");
const cartTwo = document.querySelector(".poster-prdoucts-2");
logoClick.addEventListener("click" , logoClickHandler);
closeBtn.addEventListener("click" , closeBtnHandler);

function logoClickHandler() {
    cartOne.classList.add("active");
    cartTwo.classList.add("active");
}

function closeBtnHandler() {
    cartOne.classList.remove("active");
    cartTwo.classList.remove("active");
}


// add To cart Prdoucts

const btnAddToCart = document.querySelectorAll(".btn-add-to-cart");
btnAddToCart.forEach((btn) => {
    console.log(btn);
});