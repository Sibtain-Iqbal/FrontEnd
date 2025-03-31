
// Write a program to swap the values without using third variable.
function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    
    return [a, b]; 
}

console.log(swap(5, 10));



// questiok  2  

function countEvenOdd(nums) {
    let even = 0;
    let odd = 0;

    for (let num of nums) {
        if (num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    return `EVEN ${even} ,and odd ${odd}`;
}

console.log(countEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]));
// question 3Write a program that takes an array of numbers and return a new array with elements
// squared.


let squareArray = [1, 2, 3, 5, 6, 7, 8, 9];

function squarelement(arr) {
    return arr.map(num => num * num);
}

console.log(squarelement(squareArray));



// is pladrome
function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 





function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(countLetter("hello world", "o")); 
console.log(countLetter("sibtain", "a"));  
console.log(countLetter("pyton", "s")); 
