const preload = document.querySelector(".preload");
const loadWrapper = document.querySelector(".load-wrapper");
const breakpoints = [1399, 1199, 991, 768, 690, 576, 490, 375];
let isAnimating = false;
let prevWidth = window.innerWidth;

window.addEventListener("DOMContentLoaded", () => {
  P_trans();
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
        P_trans();
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

function P_trans() {
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

// restart footer animate
function restartAnimation() {
  const animate = document.querySelectorAll(".animate");

  animate.forEach((animate) => {
    animate.classList.remove("animate");
    void animate.offsetWidth;
    animate.classList.add("animate");
  });
}

window.addEventListener("resize", restartAnimation);

// body height
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

// bodyWidth - scrollbarWidth
const getScrollbarWidth = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  container.style.overflow = "scroll";

  const inner = document.createElement("div");
  container.appendChild(inner);

  const width = container.offsetWidth - inner.offsetWidth;
  document.body.removeChild(container);

  return width;
};

const scrollbarWidth = getScrollbarWidth();
document.documentElement.style.setProperty(
  "--scrollbar",
  `${scrollbarWidth}px`
);

console.log("bodyWidth = " + (document.body.clientWidth - scrollbarWidth));
