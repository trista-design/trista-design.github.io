// 往上藏起來
const navsecond = document.querySelector(".nav-second");
const pjBackground = document.querySelector(".nav-project-background");
let prevScrollpos = window.scrollY;

window.onscroll = function () {
  scrollHide();
  progressBarScroll();
};

function scrollHide() {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    navsecond.classList.add("slideDown");
    pjBackground.classList.add("slideDown");
    navsecond.classList.remove("slideUp");
    pjBackground.classList.remove("slideUp");
  } else {
    navsecond.classList.add("slideUp");
    pjBackground.classList.add("slideUp");
    navsecond.classList.remove("slideDown");
    pjBackground.classList.remove("slideDown");
  }
  prevScrollpos = currentScrollPos;
}

function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}
