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
const boxPrdouct = document.querySelector(".box-prdouct");
const itemPrdouctAll = document.querySelectorAll(".item-prdouct");
const condition = document.querySelector(".condition");
const countLogoCart = document.querySelector(".count-number-cart");
let callArrayList = [];

btnAddToCart.forEach((btnAdd) => {
    let isFatherElements = btnAdd.parentElement;
    btnAdd.addEventListener("click" , addToCartHandler);

    function addToCartHandler() {
        const callObjectList = {
          id: isFatherElements.querySelector("input").value,
          name: isFatherElements.querySelector(".name-card-prdouct").innerText,
          imgae: isFatherElements.querySelector(".img-card-prdouct").getAttribute('src'),
          price: isFatherElements.querySelector(".price-main").innerText,
          discount:isFatherElements.querySelector(".price-none").innerText,
          qerntyis : 1,
        };
        
    
        let conditionAddToCart =
          callArrayList.filter((item) => item.id === callObjectList.id).length >
          0;

        if (!conditionAddToCart) {
          callArrayList.push(callObjectList);
          snedDataToCart(callObjectList , callArrayList);
          callBell(callArrayList);
        } else {
          alert("در سبد خرید موجود بود");
        }

        let boxItems = boxPrdouct.children;
        
        if (boxItems.length > 0) {
            condition.innerText = "سبد خرید شما";
        } else {
            condition.classList.add("d-block");
        }


    }
});


function snedDataToCart(callObject , callArray) {
    boxPrdouct.insertAdjacentHTML(
    "afterbegin",`
    <div class="item-prdouct d-flex flex-row bg-white">
    <h4 class="count-prdouct">${callArray.length}</h4>
    <img src="${callObject.imgae}" class="img-prdouct">
    <h4 class="name-prdouct fs-5 pt-4 ps-2 w-50">${callObject.name}</h4>
    <h4 class="price-prdouct fs-5 pt-4 ps-2">${callObject.price}</h4>
    <a href="#" class="h-25 btn btn-outline-danger mt-3 ms-2">+</a>
    <h4 class="number-prdouct fs-5 pt-4 ps-2">0</h4>
    <a href="#" class="h-25 btn btn-outline-danger mt-3 ms-2">-</a>
    <a href="#" class="h-25 btn btn-outline-success mt-3 ms-2">خرید</a>
    <a href="#" class="h-25 btn btn-outline-danger mt-3 ms-1">حذف</a>
    </div>`);
}

function callBell(line) {
    countLogoCart.innerText = `${line.length}`;
}
