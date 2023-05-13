// scrollBar Position the scroll Down WebSite
const progress = document.querySelector(".progresser-bar");
window.addEventListener("scroll" , DownScroll);


function DownScroll() {
    const winScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = `${scrolled}%`;
}