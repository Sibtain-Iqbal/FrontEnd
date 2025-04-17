
const burger = document.getElementById("hamburger")

burger.addEventListener('click',()=>{
   const menu  =  document.getElementById("menu")
   if (menu.style.display === "flex") {
    
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
})
