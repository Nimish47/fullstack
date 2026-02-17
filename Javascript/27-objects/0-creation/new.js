// creating objects via new + constructor way
// 'new' helps in creating instances - here an object


// CASE: new + Object constructor
const obj1 = new Object({ id: 123, age: 24 })

// print object
console.log(obj1)                   // { id: 123, age: 24 }

// analyze __proto__
console.log(obj1.__proto__)         // Object.prototype




// CASE: new + custom constructor (Function instance)
function User(id) {
    this.id = id,
    this.normFn = function () { return `${this.id} from normal fn` }
    this.arrowFn = () => { return `${this.id} from arrow fn` }
}

const obj2 = new User(23)

// print object
// it looks diff from obj1 (has User introduction)
console.log(obj2)  
// User {
//   id: 23,
//   normFn: [Function (anonymous)],
//   arrowFn: [Function (anonymous)]
// }

// access normal fn
// this decided at call time
console.log(obj2.normFn())                  // 23 from normal fn

// access arrow fn
// this decided at definition time
// arrow fn defined inside constructor fn
// fn creates 'scope', 'this' preserved
console.log(obj2.arrowFn())                 // 23 from arrow fn


// debug __proto__
// refers User.prototoype
console.log(obj2.__proto__)                 // {}
