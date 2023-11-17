// work-section
// filter-btn ( toggle active )
let allFilterBtns = document.getElementById("filter-btns");
let btns = allFilterBtns.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("btn-active");
    current[0].className = current[0].className.replace(" btn-active", "");
    this.className += " btn-active";
  });
}

// filter-projectCard
filterSelection("all");
function filterSelection(e) {
  let p, i;
  p = document.getElementsByClassName("pj-card");
  // 當 c 是 "all" 時，不進行任何篩選。
  if (e == "all") e = " ";
  for (i = 0; i < p.length; i++) {
    // 將 "show" 類別從當前元素中移除並隱藏它。
    removeClass(p[i], "show");
    if (p[i].className.indexOf(e) > -1) addClass(p[i], "show");
  }
}

function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// BTT
function BackToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
