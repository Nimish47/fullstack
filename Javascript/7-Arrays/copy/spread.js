// cloning arrays via spread operator
// easies shallow clone way
// copy by value => level 1
// copy by reference => level 1 and above

// define array
let arr = ['apple', { fName: 'arjun' }]


// copy by reference via spread operator
let copyArr = [...arr]


// modify copy array
copyArr[0] = "oranges"
copyArr[1].fName = "karn"

// level 1 remain unaffected
// level 2 modified
console.log(arr) // [ 'apple', { fName: 'karn' } ]