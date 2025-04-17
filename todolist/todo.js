

const button =  document.getElementById("btn")
 

button.addEventListener('click',(e)=>{
   const input = document.getElementById("input")
   const newtext = input.value
   if (newtext === "") return;


   const paras = document.getElementById("newtask")
   // const newli = document.createElement("li")

   // newli.textContent = newtext;
   // const news =  document.createElement("p")
   paras.textContent = newtext;
   input.value = ""

   


})