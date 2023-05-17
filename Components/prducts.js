// cart and postion are required...
const logoClick = document.querySelector(".logo-passter");
const closeBtn = document.querySelector(".close-times");
const cartOne = document.querySelector(".poster-prdoucts-1");
const cartTwo = document.querySelector(".poster-prdoucts-2");
logoClick.addEventListener("click", logoClickHandler);
closeBtn.addEventListener("click", closeBtnHandler);

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
const condition = document.querySelector(".condition");
const countLogoCart = document.querySelector(".count-number-cart");
const totalPrices = document.querySelector(".total-prices-main");
let callArrayList = [];



btnAddToCart.forEach((btnAdd) => {
  let isFatherElements = btnAdd.parentElement;
  btnAdd.addEventListener("click", addToCartHandler);

  function addToCartHandler() {
    const callObjectList = {
      id: isFatherElements.querySelector("input").value,
      name: isFatherElements.querySelector(".name-card-prdouct").innerText,
      imgae: isFatherElements.querySelector(".img-card-prdouct").getAttribute("src"),
      price: isFatherElements.querySelector(".price-main").innerText,
      discount: isFatherElements.querySelector(".price-none").innerText,
      queryCount: 1,
    };

    let conditionAddToCart =
      callArrayList.filter((item) => item.id === callObjectList.id).length > 0;

    if (!conditionAddToCart) {
      callArrayList.push(callObjectList);
      snedDataToCart(callObjectList, callArrayList);
      callBell(callArrayList);
      calculator(); 
      isSaveDataToLocalStorage(callObjectList);
    } else {
      alert("در سبد خرید موجود بود");
    }

    let boxItems = boxPrdouct.children;

    if (boxItems.length > 0) {
      condition.innerText = "سبد خرید شما";
    } else {
      condition.classList.add("d-block");
    }



    let isDomAllPrdoucts = document.querySelectorAll(".item-prdouct");
    isDomAllPrdoucts.forEach((isItem) => {
      if (isItem.querySelector("#value-prdouct").value === callObjectList.id ) {
        plusFoodController(isItem , callObjectList);
        miunsFoodController(isItem, callObjectList);
        deleteCart(isItem , callObjectList);
      }
    });
  
    
  }
});

function snedDataToCart(callObject, callArray) {
  boxPrdouct.insertAdjacentHTML(
    "afterbegin",`
    <div class="item-prdouct d-flex flex-row bg-white">
    <input type="hidden" value="${callObject.id}" id="value-prdouct">
    <h4 class="count-prdouct">${callArray.length}</h4>
    <img src="${callObject.imgae}" class="img-prdouct">
    <h4 class="name-prdouct fs-5 pt-4 ps-2 w-50">${callObject.name}</h4>
    <h4 class="price-prdouct fs-5 pt-4 ps-2">${callObject.price}</h4>
    <a href="#" class="btn-plus h-25 btn btn-danger mt-3 ms-2" action="[plus]">+</a>
    <h4 class="number-prdouct fs-5 pt-4 ps-2">${callObject.queryCount}</h4>
    <a href="#" class="btn-miuns h-25 btn btn-danger mt-3 ms-2" action="[miuns]">-</a>
    <a href="#" class="h-25 btn btn-success mt-3 ms-2">خرید</a>
    <a href="#" class="btn-remove h-25 btn btn-danger mt-3 ms-1">حذف</a>
    </div>`
  );
}

function callBell(line) {
  countLogoCart.innerText = `${line.length}`;
}

function calculator() {
  let total = 0;
  callArrayList.forEach((item) => {
    total += item.price * item.queryCount;
    totalPrices.innerText = `${total} تومان`;
  });
}




function plusFoodController(isItem , callObjectList) {

  isItem.querySelector("[action='[plus]']").addEventListener("click" , function(e) {
    e.preventDefault();
    callArrayList.forEach(items => {
      if (items.id === callObjectList.id) {
        isItem.querySelector(".number-prdouct").innerText = ++items.queryCount;
        calculator();
      }
    });
  });

}






function miunsFoodController(isItem , callObjectList) {

  isItem.querySelector("[action='[miuns]']").addEventListener("click" , function(e) {
    e.preventDefault();
    callArrayList.forEach(items => {
      if (items.id === callObjectList.id) {
        isItem.querySelector(".number-prdouct").innerText = --items.queryCount;
        if (isItem.querySelector(".number-prdouct").innerText === "0") {
            isItem.remove();
            isDeleteDataToLocalStorage(isItem);
        }
        calculator();
      }
    });

  });

}





// is Save Data from Local Storage...

function isSaveDataToLocalStorage(data) {
  let commodity;
  if (localStorage.getItem("commodity") === null) {
    commodity = [];
  } else {
    commodity = JSON.parse(localStorage.getItem("commodity"));
  }
  commodity.push(data);
  localStorage.setItem("commodity" , JSON.stringify(commodity));
}


// Delete Data From Local Storage...

function isDeleteDataToLocalStorage(data) {
  let commodity;
  if (localStorage.getItem("commodity") === null) {
    commodity = [];
  }
  else {
    commodity = JSON.parse(localStorage.getItem("commodity"));
  }
  let isCondional = data.children[0].innerText;
  commodity.splice(isCondional.indexOf(commodity) , 1);
  localStorage.setItem("commodity" , JSON.stringify(commodity));
}


// Delete Button Click...


function deleteCart(isItem , callObjectList) {
  isItem.querySelector(".btn-remove").addEventListener("click" , function(e) {
    e.preventDefault();
    callArrayList.forEach((item) => {
      if (item.id === callObjectList.id) {
        isItem.remove();
        callArrayList.pop();
        countLogoCart.innerText = `${callArrayList.length}`;
        calculator();
        isDeleteDataToLocalStorage(isItem);
      }
    });
  });
}