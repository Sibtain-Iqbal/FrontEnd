
const img = document.getElementById("img")
const username = document.getElementById("username")


const githubprofile =()=>{

    fetch("https://api.github.com/users")
    .then(data => data.json())

    .then((data)=>{

        const newdata = data[6]
        img.src = newdata.avatar_url
        username.textContent = newdata.login        
    })


    .catch((error)=>{
        console.log("error handle",error);
        
    })
}


githubprofile()