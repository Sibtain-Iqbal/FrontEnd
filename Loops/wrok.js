function sumevennumbers(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

console.log(sumevennumbers(10));


// prpgram 2


function countDigits(num) {
    let count = 0;
    do {
        count++;
        num = Math.floor(num/10);
    } while (num > 0);
    return count;
}

console.log(countDigits(10)); 
