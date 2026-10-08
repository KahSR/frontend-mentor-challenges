const btnMenu = document.querySelector(".js-btn-menu");
const nav = document.querySelector(".js-container-navigation");
const menuOverflow = document.querySelector(".menu-overflow");

function toggleMenu(event){
  
  document.body.classList.toggle("open-menu");

  if(event.type === "touchstart"){
    event.preventDefault();
  }

  if(nav.classList.contains("open-navigation")){
    nav.classList.remove("open-navigation");
    document.querySelector(".js-icon-menu").src = "assets/images/icon-menu.svg";
  }else{
    nav.classList.add("open-navigation");
    document.querySelector(".js-icon-menu").src = "assets/images/icon-close.svg";
  }
}

let resizeTimer;

window.addEventListener("resize", function(){
  document.body.classList.add("resizing");
  nav.classList.remove("open-navigation");
  document.body.classList.remove("open-menu");

  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(function(){
    document.body.classList.remove("resizing");
  }, 150);
})

btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu)