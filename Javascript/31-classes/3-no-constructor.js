// No constructor , No issues


// CASE: class with no constructor
class User {
    sayHello() { console.log(`Hello I am a prototype method`) }
    static isUser() { console.log('hello I am a static method') }
}

// CASE: new 
const a1 = new User()
console.log(a1)                         // User {}

// CASE: access static utils
User.isUser()                           // hello I am a static method

// CASE: access prototype props?
a1.sayHello()                           // Hello I am a prototype method


