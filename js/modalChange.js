const modalimg = document.querySelector("#toolOldimg");

updateImage();

window.addEventListener("resize", updateImage);

function updateImage() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 576) {
    modalimg.src = "/img/project/UIUX/Metro/toolOld-img2.png";
    modalimg.style.width = "100%";
  } else {
    modalimg.src = "/img/project/UIUX/Metro/toolOld-img.png";
    modalimg.style.width = "95%";
  }
}
