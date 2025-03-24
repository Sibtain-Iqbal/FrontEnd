
function canVote(age) {
    if (age >= 18 ){
        return age >= 18;
    }
    

}

function VotingEliglibility(age) {
    if (canVote(age)) {
      return "you can Vote !!";
    } else {
      return `Wait ${18 - age} more years to vote.`;
    }
  }

  
console.log(VotingEliglibility(10))