// Modern and complete way of Inheritance in javascript (Without classes)

// true inheritance
    // instance properties (structure, not values)
    // static utilities (direct reference) (can be skipped)
    // prototype properties (direct reference)

// note
    // when linking prototypes, follow proper order
    // else child prototype methods can get erased

// 1. inherit static utilities
    // via Object.setPrototypeOf

// 2. inherit instance proeprties
    // via this binding + constructor call - via call()    

// 3. prototype properties
    // via object.create + 
    // constructor proeprty set


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
    // 1-parent constructor call, instance properties structure inherited
    // fires parent constructor and does: (this refers to instance of Labour)
            // this.name = name
            // this.age = age
            // this.aura = aura
    Boss.call(this, name, age, aura) 
    this.category = category
}

// child static utiility
Labour.bottomSalaryGrade = function () {
    console.log('Employee salary grade is E1 ( <4 LPA)')
}

// // child prototype - DO NOT DEFINE HERE
// Labour.prototype.workHard = function () {
//     console.log(`${this.name} needs to perform better!`)
// }


// 2-inherit static utility
// sets Labour.__proto = Boss
Object.setPrototypeOf(Labour,Boss)


// 3A-inherit prototype properties
// internally does this
    // create new empty object => Labour.prototype = {}
    // sets prototype
            // {}.__proto__ = Boss.prototype same as
            // Labour.prototype.__proto__ = Boss.prototype
            // notice if prototype methods assgned before , get erased
            // so proper order to be followed
Labour.prototype = Object.create(Boss.prototype)

// 3B-link constructor - good to do
Labour.prototype.constructor = Labour
// if not done - instance of Labour will print like

// Boss {
//   name: 'Nishant Nimish',
//   age: 31,
//   aura: 'low',
//   category: 'bottom-tier'
// }

// without constructor setting, Labour instances seem to be created by Boss, but that's wrong
// so set it always


// child prototype -  yes do it here
Labour.prototype.workHard = function () {
    console.log(`${this.name} needs to perform better!`)
}



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