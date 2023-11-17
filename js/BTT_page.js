// BTT - page
window.addEventListener("scroll", backToTopBTN);
window.addEventListener("load", backToTopBTN);

function backToTopBTN() {
  const BTT = this.document.getElementById("BTT-page");
  let scrollHeight = document.documentElement.scrollHeight; // 整個頁面的高度
  let scrollTop = document.documentElement.scrollTop; // 滾動的垂直位置
  let windowHeight = window.innerHeight; // 視窗的高度

  if (scrollTop >= 500 && scrollTop <= scrollHeight - windowHeight - 400) {
    // 如果scrollY > 500 ～ scrollY < 整個頁面高度 - 400(footer高度) 才顯示
    BTT.style.display = "flex";
  } else {
    // 否則隱藏 back-to-top 按鈕
    BTT.style.display = "none";
  }
}

// footer
function BackToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
