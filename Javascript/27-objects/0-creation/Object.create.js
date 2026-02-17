// Object.create
// "always" creates an object no matter what prototype we refer


// CASE: create an object and set its prototype = a real .prototoype
const obj1 = Object.create(Array.prototype)

// creates object
// Object.create always creates an object, no matter what proto we set
console.log(obj1)                       // Array {}

// __proto__ refers Array.prototype
// Strange example
console.log(obj1.__proto__)             // refers Array.prototype



// CASE: create an object and set its prototype = an object
const obj2 = Object.create({id: 123, age: 23})

// print
console.log(obj2)                        // {}

// accessible via proto chain
console.log(obj2.age)                    // 23              

// observe
console.log(obj2.__proto__)              // {id: 123, age: 23}

// observe
console.log(obj2.__proto__.__proto__)    // refers Object.prototype

// accessible via proto chain
console.log(obj2.toString())             // '[object Object]'


// CASE: special case
// Object.create(null)
const obj3 = Object.create(null)

// print
console.log(obj3) //{}

// this object has no __proto__
console.log(obj3.__proto__) // undefined

// js unable to find totring() in proto chain
// hence throws error
console.log(obj2.toString())  // error
