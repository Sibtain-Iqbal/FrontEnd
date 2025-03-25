const arr1 = [1,2,3,4,5,6]
const arr2 = [7,8,9,10]

const arr3 = [...arr1,...arr2]
// console.log(arr3);


// 

const original = [1, 2, 3];
const copy = [...original];

copy.push(4);

console.log(original); 
console.log(copy);  









const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle);
  




  const details = {
    name : "sibtain",
    age : 19,
    City: "gILGIT",
    idNo : 10,
    location : "Danyoure gb"
  }

  const peron = {...details,idNo : 10}

  console.log(peron);
  