
function canVote(age) {
    if (age >= 18 ){
        return age >= 18;
    }
    

}

function VotingEliglibility(age) {
    if (canVote(age)) {
      return "you can Vote !!";
    } 

    else {
      return `Wait ${ 18 - age} more years to vote.`;
    }
  }

  
console.log(VotingEliglibility(10))








//drving eligibility



function candrive(age){
    if (age>=16){
        return age 
    }
}


function getlicence(age){
    if (candrive(age)){
        console.log("you are eligible to drive car");
        
    }
    else{
        return (`you are not eligilbe to drive car wait ${19 -age} year !`);
        
    }
}


console.log(getlicence(10));



//  buying 


function canbuy(balance,price){
    if (balance>= price){
        return balance,price
    }
}


function buying(balance,price){
    if (canVote(balance,price)){
        return `your account balcance iss ${balance} buy something `
    }
    else{
        return `your account is balance is less than for buy on this ${price}PKR`
    }

}

console.log(buying(1000,400));

 