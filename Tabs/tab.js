const web = document.getElementById("web")
const uiux = document.getElementById("uiux")
const marketing = document.getElementById("marketing")

const websection = document.getElementById("web-section")
const uiuxsection = document.getElementById("uiux-section")
const marketingsection = document.getElementById("marketing-section")


web.addEventListener('click', handlewebsection)
uiux.addEventListener('click', handleuiuxsection)
marketing.addEventListener('click', handlemarketing)




function handlewebsection() {
    uiuxsection.style.display = "none"
    marketingsection.style.display = "none"
    websection.style.display = "flex"

    uiux.classList.remove("active")
    marketing.classList.remove("active")
    web.classList.add("active")
}



function handleuiuxsection() {
    websection.style.display = "none"
    marketingsection.style.display = "none"
    uiuxsection.style.display = "flex"


    web.classList.remove("active")
    marketing.classList.remove("active")
    uiux.classList.add("active")
}



function handlemarketing() {
    websection.style.display = "none"
    uiuxsection.style.display = "none"
    marketingsection.style.display = "flex"
    

    web.classList.remove("active")
    uiux.classList.remove("active")
    marketing.classList.add("active")
}




