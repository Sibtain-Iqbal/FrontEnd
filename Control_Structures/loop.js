const fruits = ['apple', 'banana', 'cherry'];

const upperFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase(); // transforming string to uppercase
});

console.log(upperFruits); // ['APPLE', 'BANANA', 'CHERRY']



// 


const fruitss = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Output:
// apple
// banana
// cherry
