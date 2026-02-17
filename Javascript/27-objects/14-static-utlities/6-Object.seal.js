// Object constructor static property - Object.seal

// a simple object
const obj = {fName: 'Karan', age: 25}


// CASE: seal object
Object.seal(obj)


// CASE: cannot add property
// won't throw error but nothing will happen
obj.lName = 'Nimish'
console.log(obj)                                // {fName: 'Karan', age: 25}



// CASE: update allowed
obj.fName = 'Nishant'   
console.log(obj)                                // {fName: 'Nishant', age: 25}



// CASE: deletion not allowed
// won't throw error but nothing will happen
delete obj.fName
console.log(obj)                                // {fName: 'Nishant', age: 25}