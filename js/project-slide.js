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
