// for Each loop with arrays
// throws error - illegal break statement


const arr = ['apple', 'oranges', 'papaya']

arr.forEach((element, index) => {
    if(element === 'oranges') {
        break;
    }
    console.log(index, ':', element)
});

// 0 : apple
// 1 : oranges
// 2 : papaya