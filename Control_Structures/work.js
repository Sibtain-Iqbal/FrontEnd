let days = 3;


switch (days) {
    case 1:
        console.log("today is Monday");
        break;
    case 2:
        console.log("Today is Tudesday");
        break
    case 3:
        console.log("today is wednesday");
        break;
    case 4:
        console.log("todat is thruday");
        break;
    case 5:
        console.log("today is friday");
        break;
    case 6:
        console.log("today is saturday");
        break;
    case 7:
        console.log("today is Sunday");
        break;
    default:
        console.log("Holiday");
        break






}


// 
let day = 11;

if (day >= 1 && day <= 7) {

    if (day === 1) {
        console.log("Today is Monday");
    } 

    else if (day === 2) {
        console.log("Today is Tuesday");
    }

     else if (day === 3) {
        console.log("Today is Wednesday");
    }

     else if (day === 4) {
        console.log("Today is Thursday");
    } 

    else if (day === 5) {
        console.log("Today is Friday");
    } 

    else if (day === 6) {
        console.log("Today is Saturday");
    } 

    else {
        
        console.log("Today is Sunday");
    }
} else {
    console.log("Holiday");
}




// Objects 


let person = {
    name: "Sibtain",
    age: 19,
    city: "Gilgit baltitrain",
    address: {
        street: "Main Street",
        houseNumber: 123,
        postalCode: "15100"
    }
};

console.log(person.name);               
console.log(person.age);                
console.log(person.city);               
console.log(person.address.street);     
console.log(person.address.houseNumber); 
console.log(person.address.postalCode);
