// color palette
const colorPrimary = document.getElementById("color-primary");
const colorSecond = document.getElementById("color-second");
const colordivider = document.querySelector("#color-divider");

const colorwrapper = document.querySelector(".color-left");
let cTitleW = Number(colorwrapper.childNodes[1].childNodes[1].clientWidth);
let cDecoW1 = Number(colorwrapper.childNodes[1].childNodes[3].clientWidth);
let cDecoW2 = Number(colorwrapper.childNodes[1].childNodes[5].clientWidth);
let cPrimaryW = Number(colorwrapper.childNodes[1].childNodes[7].clientWidth);
let cDecoW3 = Number(colorwrapper.childNodes[1].childNodes[9].clientWidth);

let paletteFirst = document.querySelector("#paletteP");
let paletteSecond = document.querySelector("#paletteS");

colorPrimary.addEventListener("click", () => {
  colorPrimary.classList.add("active");
  colorSecond.classList.remove("active");
  colordivider.style.setProperty("left", `${cTitleW + cDecoW1 + cDecoW2}px`);
  colordivider.style.setProperty(
    "width",
    `${Number(colorPrimary.clientWidth)}px`
  );
  paletteFirst.classList.add("d-flex");
  paletteFirst.classList.remove("d-none");
  paletteSecond.classList.add("d-none");
  paletteSecond.classList.remove("d-flex");
});

colorSecond.addEventListener("click", () => {
  colorSecond.classList.add("active");
  colorPrimary.classList.remove("active");
  colordivider.style.setProperty(
    "left",
    `${cTitleW + cDecoW1 + cDecoW2 + cPrimaryW + cDecoW3}px`
  );
  colordivider.style.setProperty(
    "width",
    `${Number(colorSecond.clientWidth)}px`
  );
  paletteSecond.classList.add("d-flex");
  paletteSecond.classList.remove("d-none");
  paletteFirst.classList.add("d-none");
  paletteFirst.classList.remove("d-flex");
});

// typography
const typePrimary = document.getElementById("type-primary");
const typeSecond = document.getElementById("type-second");
const typedivider = document.querySelector("#type-divider");

const typewrapper = document.querySelector(".type-right");
let tTitleW = Number(typewrapper.childNodes[1].childNodes[1].clientWidth);
let tDecoW1 = Number(typewrapper.childNodes[1].childNodes[3].clientWidth);
let tDecoW2 = Number(typewrapper.childNodes[1].childNodes[5].clientWidth);
let tPrimaryW = Number(typewrapper.childNodes[1].childNodes[7].clientWidth);
let tDecoW3 = Number(typewrapper.childNodes[1].childNodes[9].clientWidth);

let typeTxtP = document.querySelector("#typetxtP");
let typeTxtS = document.querySelector("#typetxtS");

typePrimary.addEventListener("click", () => {
  typePrimary.classList.add("active");
  typeSecond.classList.remove("active");
  typedivider.style.setProperty("left", `${tTitleW + tDecoW1 + tDecoW2}px`);
  typedivider.style.setProperty(
    "width",
    `${Number(typePrimary.clientWidth)}px`
  );
  typeTxtP.classList.add("d-flex");
  typeTxtP.classList.remove("d-none");
  typeTxtS.classList.remove("d-flex");
  typeTxtS.classList.add("d-none");
});

typeSecond.addEventListener("click", () => {
  typeSecond.classList.add("active");
  typePrimary.classList.remove("active");
  typedivider.style.setProperty(
    "left",
    `${tTitleW + tDecoW1 + tDecoW2 + tPrimaryW + tDecoW3}px`
  );
  typedivider.style.setProperty("width", `${Number(typeSecond.clientWidth)}px`);
  typeTxtS.classList.add("d-flex");
  typeTxtS.classList.remove("d-none");
  typeTxtP.classList.add("d-none");
  typeTxtP.classList.remove("d-flex");
});
