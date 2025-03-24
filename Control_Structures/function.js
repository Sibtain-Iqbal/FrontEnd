function addition(a,b,c){
    sums = a+b+c
    console.log(sums);
    
}


addition(a =1,b=2,c=4)


// multiplication




function subtraction(a,b,c){

     sub =a-b-c
     return sub


}

const nesw = subtraction(10,20,30)
console.log(nesw);




//  even and odd numbers



function IsEven(numbersss){

    if(numbersss % 2 == 0){
        console.log(numbersss + " is even ");
        
    }

    else {
        console.log(numbersss +"is odd ");
        
    }
}
IsEven(2)




function  maxNum(a,b,c) {
    let max ;
    
    
    if (a>=b && c>=b) {
         max = a;
        
    }
    else if(b>a && b>c)  {
        max = b;
    }  
    else {
        max = c
    }
    console.log(max);   

}
maxNum(1,2,4)







//  object with function



