// for Each loop with arrays
// throws error - illegal break statement

// Issue: forEach doesn't support break — it throws "Illegal break statement"
// Why? 
    // forEach is a callback-based loop that always iterates through every element.
    // You can't break out of it.


const arr = ['apple', 'oranges', 'papaya']

arr.forEach((element, index) => {
    if(element === 'oranges') break;
    console.log(index, ':', element)
});

// 0 : apple
// 1 : oranges
// 2 : papaya