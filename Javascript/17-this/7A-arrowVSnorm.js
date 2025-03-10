// Use case when to use Arrow over Normal:

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