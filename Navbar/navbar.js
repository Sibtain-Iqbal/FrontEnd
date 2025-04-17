
const burger = document.getElementById("hamburger")
const cross = document.getElementById("cross")

burger.addEventListener('click',()=>{
   const menu  =  document.getElementById("menu")
   const cross = document.getElementById("cross")
   if (menu.style.display === "flex") {
    
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
  

  // if (cross.style.display === "block"){
  //   cross.style.display = "flex"
    
  // }
  // else{
  //   cross.style.display  = "block"
  // }
 

})

cross.addEventListener('click',()=>{
  if(burger.style.display === "flex"){
    cross.style.display = "block"
  }
    else{
      cross.style.display ="flex"
    }
})
