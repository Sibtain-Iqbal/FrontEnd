// const anevent = document.getElementById('button')
//  const para = document.getElementById('oara')

// anevent.addEventListener('click',handle)


// function handle(){
//     document.writeln("click")
//     para.textContent = "event occured"
// }


const para  = document.getElementById('para')
const inputs = document.getElementById('input')

inputs.addEventListener("keypress",(e)=>{
    para.textContent = e.target.value
})