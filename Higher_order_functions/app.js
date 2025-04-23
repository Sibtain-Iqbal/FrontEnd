const arr = [1,2,3,4,5,67]

const newreslut  = arr.map((newarr)=>{
    return  newarr  = newarr +1
})
// console.log(newreslut);



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
// console.log(filterresult);




const resultfind = filters.find((data)=>{
    return data.job ==="developer" && data.age>10
}) 
// console.log(resultfind);



const resultReduce = arr.reduce((a,b)=>{
    return a+b
})
// console.log(resultReduce);




const users = [
    {firstName: 'Sibtain', lastName: 'iqbal', age: 25},
    {firstName: 'Measum', lastName: 'Abbas', age: 30},
    {firstName: 'Ansar', lastName: 'Abbas', age: 35},
    {firstName: 'hello', lastName: 'world', age: 40},
    {firstName: 'hi', lastName: 'by', age: 45},
]

const newuser =  users.map(data => data.firstName + "" + data.lastName)
// console.log(newuser);






const BankAcoount = ()=>{
    let balance = 0

    return {

        addBalance : (amount)=>{
            balance = balance + amount
        },
        cashoutBalance : (amount)=>{
            balance = balance - amount
        },
        getBalance : ()=>{
            return balance
        }
     
    }
}

const newaccont = BankAcoount()
console.log( newaccont.getBalance());

newaccont.addBalance(2000)
console.log( newaccont.getBalance());


newaccont.cashoutBalance(1500)

console.log( newaccont.getBalance());


