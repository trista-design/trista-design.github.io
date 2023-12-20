// scrollBar
const slide = document.querySelector("#imageslider");
const scroll = document.querySelector(".custom-scrollbar");
const scrollThumb = document.querySelector(".scrollbar-thumb");
const scrollBar = document.querySelector(".custom-scrollbar");

slide.addEventListener("scroll", () => {
  let scrollPosition =
    (slide.scrollLeft / (slide.scrollWidth - slide.clientWidth)) * 100;
  let thumbPosition = (scrollBar.clientHeight - 30) * (scrollPosition / 100);
  scrollThumb.style.top = thumbPosition + "px";
});

// experience_slide

const slider = document.querySelector("#imageslider");
let isDown = false;
let startX;
let scrollLeft;

// 滑鼠拖移
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
});
slider.addEventListener("mouseup", () => {
  isDown = false;
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  // 滑鼠在slider裡的x座標位置
  const x = e.pageX - slider.offsetLeft;
  // 當前滑鼠位置向左右移的距離 *(speed)
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});

// 滑鼠滾動
slider.addEventListener("wheel", (e) => {
  // 檢查deltaX，確定滾動方向
  if (e.deltaX === 0) {
    e.preventDefault();
    slider.scrollLeft += e.deltaY * 4;
  }
});

// BTT
function BackToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// rightspace
function updateRightSpace() {
  const exWrapper = document.querySelector(".ex-wrapper");
  const experience = document.querySelector(".experience");

  const rightSpace = (experience.offsetWidth - exWrapper.offsetWidth) / 2;
  document.documentElement.style.setProperty(
    "--rightspace",
    `-${rightSpace}px`
  );

  // console.log("右邊寬度為：", rightSpace);
}

window.addEventListener("resize", updateRightSpace);

updateRightSpace();
