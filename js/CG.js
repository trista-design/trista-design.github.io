const preload = document.querySelector(".preload");
const loadWrapper = document.querySelector(".load-wrapper");
const breakpoints = [1399, 1199, 991, 768, 690, 576, 490, 375];
let isAnimating = false;
let prevWidth = window.innerWidth;

window.addEventListener("DOMContentLoaded", () => {
  CG();
});

window.addEventListener("resize", () => {
  let width = window.innerWidth;

  for (let breakpoint of breakpoints) {
    if (
      (prevWidth == breakpoint + 1 && width == breakpoint) ||
      (prevWidth == breakpoint && width == breakpoint + 1)
    ) {
      isAnimating = true;
      reshow();
      setTimeout(() => {
        CG();
        isAnimating = false;
      }, 0);
      console.log(breakpoint + "px,轉場動畫！");
      break;
    }
  }

  prevWidth = width;
});

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

function CG() {
  let l = document.querySelector(".boxL");
  let o = document.querySelector(".boxO");
  let a = document.querySelector(".boxA");
  let d = document.querySelector(".boxD");
  let i = document.querySelector(".boxI");
  let n = document.querySelector(".boxN");
  let g = document.querySelector(".boxG");

  setTimeout(() => {
    l.classList.add("active");
  }, 500);
  setTimeout(() => {
    o.classList.add("active");
  }, 650);
  setTimeout(() => {
    a.classList.add("active");
  }, 800);
  setTimeout(() => {
    d.classList.add("active");
  }, 950);
  setTimeout(() => {
    i.classList.add("active");
  }, 1100);
  setTimeout(() => {
    n.classList.add("active");
  }, 1250);
  setTimeout(() => {
    g.classList.add("active");
  }, 1400);

  setTimeout(function () {
    preload.classList.add("disapper", "opacity0");
  }, 1700);
}

function reshow() {
  let boxes = document.querySelectorAll(".box");

  preload.classList.remove("disapper", "opacity0");

  boxes.forEach((box) => {
    box.classList.remove("active");
  });
}
