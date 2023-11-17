// 向下滑改變效果
const menu = document.querySelector(".nav-menu");
const background = document.querySelector(".nav-background");
const pageBTN = document.querySelectorAll(".page-btn");
console.log(pageBTN);

window.onscroll = function () {
  scrollChange();
};

function scrollChange() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    background.style = "animation:show 0.5s ease ; opacity:1";
    menu.style = "padding: 0 24px 0 32px";
  } else if (window.innerWidth <= 490) {
    background.style = "animation:close 0.5s ease ; opacity:0";
    menu.style = "padding: 0 0 0 24px";
  } else {
    background.style = "animation:close 0.5s ease ; opacity:0";
    menu.style = "padding: 0";
  }
}
// 鼠标悬停时改变按钮颜色
pageBTN.forEach((btn) => {
  btn.addEventListener("mouseover", function () {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      this.style.backgroundColor = "var(--white)";
    } else if (window.innerWidth <= 768) {
      this.style.backgroundColor = "var(--black-600)";
    } else {
      this.style.backgroundColor = "var(--black-200)";
    }
  });
  btn.addEventListener("mouseout", function () {
    this.style.backgroundColor = "initial";
  });
});

// menu - burger
const burger = document.querySelector("#menu-slider");
const mask = document.querySelector(".menu-mask");
let clickCount = 0;

burger.addEventListener("click", (e) => {
  // 打開burger選單時，無法向下滑動(y)
  if (burger.checked) {
    document.documentElement.style.overflowY = "hidden";
  } else {
    document.documentElement.style.overflowY = "auto";
  }
  clickCount++;
  // 根據點擊次數更換mask動畫
  if (clickCount % 2 === 0) {
    mask.style.animation = "close-mask 0.5s ease";
    console.log("關閉動畫");
  } else {
    mask.style.animation = "open-mask 0.5s ease";
    console.log("開啟動畫");
  }
});

// 頁面連結
const workPage = document.querySelector("#work-page");
workPage.addEventListener("click", () => {
  window.location.href = "/index.html";
});

const aboutPage = document.querySelector("#about-page");
aboutPage.addEventListener("click", () => {
  window.location.href = "/about.html";
});
