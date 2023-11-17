// add card info
let infoArtfind = document.querySelectorAll(".info-artfind");
let infoPet = document.querySelectorAll(".info-pet");
let infoSpoilview = document.querySelectorAll(".info-spoilview");
let infoMetro = document.querySelectorAll(".info-metro");

let infoCaculator = document.querySelectorAll(".info-caculator");
let infoSnakegame = document.querySelectorAll(".info-snakegame");
let infoPackage = document.querySelectorAll(".info-package");
let infoGraphy = document.querySelectorAll(".info-graphy");

infoArtfind.forEach((card) => {
  card.textContent = "尋覓藝文展覽之旅 APP";
});
infoPet.forEach((card) => {
  card.textContent = "寵物領養協尋平台";
});
infoSpoilview.forEach((card) => {
  card.textContent = "串流影劇評論網站 ";
});
infoMetro.forEach((card) => {
  card.textContent = "App Redesign";
});
infoCaculator.forEach((card) => {
  card.textContent = "成績計算網站";
});
infoSnakegame.forEach((card) => {
  card.textContent = "貪吃蛇網站遊戲";
});
infoPackage.forEach((card) => {
  card.textContent = "Packaging Design";
});
infoGraphy.forEach((card) => {
  card.textContent = "Grapic Design";
});
