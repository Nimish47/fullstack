// METHOD - entries

// arr.values()
// returns an ITERABLE that contains [index,value] pairs of array

// returns an ITERABLE(not array) that can be accessed by:
    // for of loop (best)
    // spread operator (there's a catch - check 2 vs 2.1)
// original array untouched    

    const arr = ["apple", "oranges", "pineapple"]
    const entries = arr.entries()
    
    console.log(typeof entries)        // object
    
    // way 1 - for of loop - WORKS!
    for (const item of entries) {
        console.log(item)
    }
    /*
    [ 0, 'apple' ]
    [ 1, 'oranges' ]
    [ 2, 'pineapple' ]
    */
    
    // way 2.1 - spread operator - DOESN'T WORK
    const entArr1 = [...entries]           
    console.log(entArr1)                // []
    
    // way 2.2 - spread operator - WORKS   
    const entArr2 = [...arr.entries()] 
    console.log(entArr2)                // [ [ 0, 'apple' ], [ 1, 'oranges' ], [ 2, 'pineapple' ] ]
    