const botao = document.querySelector("#button-menu-mobile");
const click1 = document.querySelector(".menu");
const click2 = document.querySelector(".body");
const click4 = document.querySelector(".button-menu-mobile");
const click3 = document.querySelector(".body-total");
botao.addEventListener("click", function () {
  click1.classList.remove("menu");
  click1.classList.toggle("menu1");
  click2.classList.remove("body");
  click2.classList.toggle("body1");
  click3.classList.toggle("body-total");
  click3.classList.toggle("body-total2");
  click4.classList.toggle("button-menu-mobile");
  click4.classList.toggle("button-menu-mobilex");
});
