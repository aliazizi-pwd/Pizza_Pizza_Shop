// JavaScript : section Comments Store for WebSite Pizza pizza...
const sendComment = document.querySelector(".btn-send-comment");
const messageNumbeBell = document.querySelector(".number-bell-message"); 
const messageModal = document.querySelector(".modaller");
const closeMessage = document.querySelector(".close-war");

let countnum = 0;
let commentList = [];
sendComment.addEventListener("click" , sendCommentClickHandler);
closeMessage.addEventListener("click" , exitMessageModal);
console.log(sendComment);


function sendCommentClickHandler() {
    let fatherHandler = sendComment.parentElement;
    countnum++;
    const ObjectSendComment = {
      id: countnum,
      titleComment: fatherHandler.querySelector(".title-name-text").value,
      textComment: fatherHandler.querySelector(".comment-text").value,
      selectFood: fatherHandler.querySelector("#selected-food").value,
    };

  

    commentList.push(ObjectSendComment);
    const listInput = fatherHandler.querySelectorAll("input");
    listInput.forEach((item) => {
        item.value = "";
    });
    if (ObjectSendComment.titleComment === "" && ObjectSendComment.textComment === "" && ObjectSendComment.selectFood === "انتخاب شما") {
        messageModal.classList.add("active");
    } else {
        messageNumbeBell.innerText = `${commentList.length}`;
        sendDataCommentToOpinion(ObjectSendComment);
        saveComment(ObjectSendComment);
    }

    const comentLoadedDom = document.querySelectorAll(".card-comment");
    
}

const controllerComment = document.querySelector(".controller-comment");
console.log(controllerComment);
function sendDataCommentToOpinion(ObjectSendComment) {
    controllerComment.insertAdjacentHTML(
    "afterbegin",`
    <div class="card-comment col mt-2">
    <div class="comment card bg-warning p-2 rounded-2" style="width: 18rem;" dir="rtl">
    <div class="card-body">
    <h4 class="title-comment card-title">${ObjectSendComment.titleComment}</h4>
    <p class="text-comment card-text">${ObjectSendComment.textComment}</p>
    <p class="functions-comment card-text">${ObjectSendComment.selectFood}</p>
    <button class="btn btn-success btn-outline-success text-light">پاسخ</button>
    </div>
    </div>
    </div>
    `
  );
}

function exitMessageModal() {
    messageModal.classList.remove("active");
}

// save the comment To local storage...
function saveComment(data) {
    let commentData;
    if (localStorage.getItem("commentData") === null) {
        commentData = [];
    } else {
        commentData = JSON.parse(localStorage.getItem("commentData"));
    }
    commentData.push(data);
    localStorage.setItem("commentData" , JSON.stringify(commentData));
}

// save To docuemnt...


document.addEventListener("DOMContentLoaded" , saveDocument);

function saveDocument() {
    let commentData;
    if (localStorage.getItem("commentData") === null) {
        commentData = [];
    } else {
        commentData = JSON.parse(localStorage.getItem("commentData"));
    }
    commentData.forEach((item) => {
    controllerComment.insertAdjacentHTML(
    "afterbegin",`
    <div class="card-comment col mt-2">
    <div class="comment card bg-warning p-2 rounded-2" style="width: 18rem;" dir="rtl">
    <div class="card-body">
    <h4 class="title-comment card-title">${item.titleComment}</h4>
    <p class="text-comment card-text">${item.textComment}</p>
    <p class="functions-comment card-text">${item.selectFood}</p>
    <button class="btn btn-success btn-outline-success text-light">پاسخ</button>
    </div>
    </div>
    </div>
    `
    );   
    });
}

