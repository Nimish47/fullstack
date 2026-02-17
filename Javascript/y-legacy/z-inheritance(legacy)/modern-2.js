// Modern and complete way of Inheritance in javascript (Without classes)

// in modern way when linkin prototypes
    // create new object
    // link __proto__
    // set constructor property

// in this way
    // only set __proto__
    // no new object, existing object mutation (discouraged by js)
    // prototype properties can be defined before ineheritance    

// this method is more cleaner than modern.js


// parent constructor
function Boss(name, age, aura) {
    this.name = name,
        this.age = age,
        this.aura = aura
}

// parent static utility
Boss.topSalaryGrade = function () {
    console.log('Boss salary grade is E6 (>25 LPA)')
}

// parent's prototype
Boss.prototype.greetings = function () {
    console.log(`${this.name} wishes you a happy new year!`)
}

// child constructor
function Labour(name, age, aura, category) {
    // 1
    Boss.call(this, name, age, aura) 
    this.category = category
}

// child static utiility
Labour.bottomSalaryGrade = function () {
    console.log('Employee salary grade is E1 ( <4 LPA)')
}

// child prototype - can be difned here
Labour.prototype.workHard = function () {
    console.log(`${this.name} needs to perform better!`)
}


// 2
// sets Labour.__proto = Boss
Object.setPrototypeOf(Labour,Boss)


// 3
// Labour.prototype.__proto__ = Boss.prototype 
// same object mutated
// "constructor" set not needed here
// same as 2
Object.setPrototypeOf(Labour.prototype,Boss.prototype)


// create child instance
const nishant = new Labour('Nishant Nimish', 31, 'low', 'bottom-tier')
console.log(nishant)
// Labour {
//   name: 'Nishant Nimish',
//   age: 31,
//   aura: 'low',
//   category: 'bottom-tier'
// }

// access Labour properties
Labour.bottomSalaryGrade()  // Employee salary grade is E1 ( <4 LPA)
nishant.workHard()          // Nishant Nimish needs to perform better!

// access Boss properties
Labour.topSalaryGrade()     // Boss salary grade is E6 (>25 LPA)
nishant.greetings()         // Nishant Nimish wishes you a happy new year!


// general
console.log(Labour.bind)        // [Function: bind]
console.log(nishant.toString)   // [Function: toString]


// future add properties to parent - child can access - TRUE INHERITANCE MAGIC
Boss.sayGoodBye = function() {console.log('Goodbye folks')}
Boss.prototype.resign = function() {console.log(`${this.name} is resigning, thanks for the service`)}

// access
Labour.sayGoodBye()     // Goodbye folks
nishant.resign()        // Nishant Nimish is resigning, thanks for the service