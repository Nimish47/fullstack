// understanding prototype chaining


// CASE: a custom instance
// can access toLocaleString() on Object.prototype
// toLocaleString not own propert of a1 instance
// via proto chaining
function Hello(id) { this.id = id }
const a1 = new Hello(12)
console.log(a1)
console.log(Object.hasOwn(a1,'toLocaleString'))                         // false
console.log(a1.__proto__.__proto__)                                     // refers Object.prototype
console.log(a1.__proto__.__proto__.toLocaleString())                    // '[object Object]'
console.log(a1.toLocaleString())                                        // '[object Object]'



// CASE: Object.create(object1)
// we can access 'instance property' of object 1 
// due to proto chaining
const obj1 = { country: 'Australia', countryID: 123 }
const obj2 = Object.create(obj1)
obj2.city = 'Melbourne'
obj2.cityId = 999

console.log(obj2)                                                       // {city: 'Melbourne', cityId: 999}
console.log(Object.hasOwn(obj2,'country'))                              // false
console.log(obj2.__proto__)                                             // refers obj1
console.log(obj2.__proto__.country)                                     // Australia
console.log(obj2.country)                                               // Australia


// CASE: special case
// Object.create(null)
// can you access toString() - NO
// null object has no __proto__ property
const obj3 = Object.create(null)
console.log(obj3.__proto__)                                         // undefined
console.log(obj3.toLocaleString())                                  // throws error