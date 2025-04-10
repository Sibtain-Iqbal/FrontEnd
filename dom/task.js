let count = 10

let countitngdown = true ;

setInterval(logic,1000)


function logic(params) {
    console.log(count);

    if (countitngdown){
        if(count > 0){
            count = count -1
        }
        else {
            countitngdown  = false
        }
    }


    else{
        if (count<10){
            count += 1
        }
        else {
            countitngdown = false
        }
    }
}