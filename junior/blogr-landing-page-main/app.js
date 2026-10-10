const btnMenu = document.querySelector(".js-btn-menu");
const menu = document.querySelector(".menu");

function toogleMenu(){
  menu.classList.toggle("active");
}

btnMenu.addEventListener("click", toogleMenu);