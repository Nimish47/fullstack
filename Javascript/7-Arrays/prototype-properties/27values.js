// METHOD - values

// arr.values()
// returns an ITERABLE that contains value at each index of array

// returns an ITERABLE(not array) that can be accessed by:
    // for of loop (best)
    // spread operator (there's a catch - check 2 vs 2.1)
// original array untouched    

    const arr = ["apple", "oranges", "pineapple"]
    const values = arr.values()
    
    console.log(typeof values)        // object
    
    // way 1 - for of loop - WORKS!
    for (const item of values) {
        console.log(item)
    }
    /*
    apple
    oranges
    pineapple
    */
    
    // way 2.1 - spread operator - DOESN'T WORK
    const valArr1 = [...values]           
    console.log(valArr1)                // []
    
    // way 2.2 - spread operator - WORKS   
    const valArr2 = [...arr.values()] 
    console.log(valArr2)                // [ 'apple', 'oranges', 'pineapple' ]
    