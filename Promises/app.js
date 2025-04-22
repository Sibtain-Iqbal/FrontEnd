// console.log("besfore settime out");



// promise acceppt

// const asycronsesHandle = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("succelfully resolve")
            
//         },[5000])
//     })
// }
// console.log("besfore settime out");
// asycronsesHandle().then((data)=>{
//     console.log(data);
    
// })



const username = document.getElementById("username")
const img = document.getElementById("img")
const section = document.getElementById("section")


const fetchgithubuser = ()=>{
    fetch("https://api.github.com/user/Sibain-Iqbal")
    .then((data)=>{
        return data.json();
    })
    .then((parsedData)=>{
        console.log("fetch");
        parsedData.forEach((users)=>{
           const div =  document.createElement("div")
           const image = document.createElement("img")
         const heading =  document.createElement("h1")
         image.src = users.avatar_url;
         
            heading.textContent = `USER NAME : ${users.login} `
            div.appendChild(image)
            div.appendChild(heading)
            section.appendChild(div)
            


        });
        
    })
    .catch((error)=>{
        console.log("ERROR FOUND",error);
        
    })
}
fetchgithubuser()