// create a simple class


// CASE: simple class
// add constructor (and instance properties)
// add static, prototype methods
class User {
    constructor(alias,age){
        this.alias = alias,
        this.age = age,
        this.getAge = () => {console.log(`Name: ${alias}, Age: ${age}`)}                // arrow fn allowed
    }

    // prototype method
    // need to be normal fn
    sayHello() {
        console.log(`Hello, my name is ${this.alias}`)
    }

    // static method
    // advised to be normal
    static isUser() {
        console.log(' I am static method of constructor User')
    }

}

// CASE: add prototype feild
// cannot define inside class
User.prototype.piggyBank = []


// CASE: access static utils
User.isUser()                                            // I am static method of constructor User

// CASE: check User.prototype
console.log(User.prototype)                             // {piggyBank: Array(0), sayHello: ƒ}

// CASE: new
const popeye = new User('Popeye', 22)

// debug instance structure
console.log(popeye)                                     // User {alias: 'Popeye', age: 22, getAge: ƒ}

// CASE: access instance properties
popeye.getAge()                                         // Name: Popeye, Age: 22

// CASE: access prototype properties
popeye.sayHello()                                       // Hello, my name is Popeye

popeye.piggyBank.push(100)
console.log(User.prototype.piggyBank)                   // [100]