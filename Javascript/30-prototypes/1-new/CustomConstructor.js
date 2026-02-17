// Understanding new + function as constructor


// CASE: create function constructor
// add 'own' => properties and methods 
// methods keep as normal and arrow
// arrow allowed as 'own' prop
function User(alias, age) {
    this.alias = alias,
    this.age = age,
    this.logAlias = function () { console.log(this.alias) },                // normal
    this.logAge = () => { console.log(this.age) }                           // arrow, ok ,no issues here
}

// CASE: add prototype properties (feilds and methods both)
// (method needs to be normal)
User.prototype.logger = function () { console.log(`Name: ${this.alias}, Age: ${this.age}`) }
User.prototype.commonId = 23

// CASE: add static utilities
// method = normal (recommended)
User.isUser = function() {console.log('I am a user!!!')}


// CASE: analyze constructor.prototoype
console.log(User.prototype)                                 // {commonId: 23, logger: ƒ}

// CASE: analyze constructor __proto__ 
console.log(User.__proto__)                                 // Function.prototype

// CASE: fire static utlities on constructor
User.isUser()                                               // I am a user!!!

// CASE: create instance + new
const a1 = new User("Tango", 31)

// CASE: access instance props
console.log(a1)                                             // User {alias: 'Tango', age: 31, logAlias: ƒ, logAge: ƒ}
a1.logAlias()                                               // Tango
a1.logAge()                                                 // 31

// CASE: analyze instance.__proto__
console.log(a1.__proto__)                                   // {commonId: 23, logger: ƒ}                           

// CASE: access prototype props
console.log(a1.commonId)                                    // 23
a1.logger()                                                 // Name: Tango, Age: 31




