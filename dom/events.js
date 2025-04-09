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





// set time oyt and setintervals

setInterval(timeCalcualtor,1000)



function timeCalcualtor (){
const date = new Date()
const second = date.getSeconds()
const minute = date.getMinutes()
const hours = date.getHours()
document.body.innerHTML = ''
document.writeln(hours + ":",minute + ":",second)


}






