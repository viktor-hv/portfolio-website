const burgerMenyBTN = document.querySelector(".burger-menu");
const navBarList = document.querySelector(".thelist");
const hero = document.querySelector(".logo");
const logo = document.querySelector(".logo-image");
let list;
burgerMenyBTN.addEventListener("click", function () {
  if ((navBarList.style.visibility = "hidden")) {
    navBarList.style.visibility = "visible";
  }
});
navBarList.addEventListener("click", () => {
  document.querySelector(".thelist").style.visibility = "hidden";
});
burgerMenyBTN.addEventListener("mouseover", () => {
  navBarList.style.visibility = "visible";
});
navBarList.firstElementChild.addEventListener("mouseout", () => {
  navBarList.style.visibility = "hidden";
});
navBarList.firstElementChild.nextElementSibling.addEventListener(
  "mouseover",
  () => {
    navBarList.style.visibility = "visible";
  }
);
navBarList.lastElementChild.addEventListener("mouseout", () => {
  navBarList.style.visibility = "hidden";
});
hero.addEventListener("click", () => {
  navBarList.style.visibility = "hidden";
});

window.addEventListener("load", () => {
  if (window.outerWidth >= 1366 && window.outerHeight >= 684) {
    logo.src = "images/Picsart_23-04-25_16-19-07-988.png";
  }
});
