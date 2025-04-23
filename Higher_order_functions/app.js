const arr = [1,2,3,4,5,67]

const newreslut  = arr.map((newarr)=>{
    return  newarr  = newarr +1
})
console.log(newreslut);



const filters = [
    {
        name:"sibtain",
        age : 20,
        job :"student"
    },
    {
        name:"mesum",
        age : 25,
        job :"developer"
    },
    {
        name:"ansar",
        age : 16,
        job :"developer"
    }
]


const filterresult = filters.filter((data)=>{
    return data.age > 10 
})
console.log(filterresult);




const resultfind = filters.find((data)=>{
    return data.job ==="developer" && data.age>10
}) 
console.log(resultfind);



const resultReduce = arr.reduce((a,b)=>{
    return a+b
})
console.log(resultReduce);

