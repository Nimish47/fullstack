// Use case when to use Arrow over Normal:

// excellent example to showcase that this used in arrow fn gets locked to lexical scope of normal fn
// compare with 2C-case3-arrow.js
  // there objectwas there
  // object has no scope
  

const basketA = {
    name: 'Bowl A',
    fruits: ['Apple', 'Oranges', 'Banana'],
  
    getFruits() {
      this.fruits.forEach(function (fruit) {
        console.log(`${this.name} contains ${fruit}`);
      });
    },
  };

  const basketB = {
    name: 'Bowl B',
    fruits: ['Papaya', 'Grapes', 'Guava'],
  
    getFruits() {
      // this within arrow fn locked to this of getFruits
      // getFruits is a fn and has a scope so locked
      this.fruits.forEach(fruit => {
        console.log(`${this.name} contains ${fruit}`);
      });
    },
  };
  

basketA.getFruits()
// undefined contains Apple
// undefined contains Oranges
// undefined contains Banana

basketB.getFruits()
// Bowl B contains Papaya
// Bowl B contains Grapes
// Bowl B contains Guava