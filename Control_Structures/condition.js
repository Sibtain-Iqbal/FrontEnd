let marrks = 100;
switch(marrks) {
    case 100 :
        console.log("A+");
        break;
    case  90 :
        console.log("A-");
    default :
    console.log("Fail");
    
            
}

let days  = [1,2,3,4,5,6];


switch (days) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Thruday");
        break;
    case 4:
        console.log("friday");      
        break;
    case 5:
        console.log("saturday");
        break;
    case 6:
        console.log("sunday");
        break;
    
    default:
        console.log("Weekend");
        
        break;
}




let  nums1 = 2;
let nums2 = 5;

let operands = "minimize";

switch(operands){

    case "Addition":
    console.log( nums1 +  nums2);
    
    break;

    case "Multiply":
        mul = nums1 *  nums2
        console.log(mul);
        break;

    case "divide":
            divide = nums1 /  nums2
            console.log(divide);
            break;
            
    case "minimize":
                mini = nums1 - nums2
                console.log(mini);
                break;
    default :
    console.log("nothing");
    
}