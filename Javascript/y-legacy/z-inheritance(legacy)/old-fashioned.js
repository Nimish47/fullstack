// Old fashioned inheritance in Javascript

// comapred to modern way, it lacks:
    // instance properties not truly inherited => parent constructor not called inside child constructor
            // name and age are not currently inherited
            // later we added aura => that also not inherited
    // manual __proto__ modification => not advisable

//Note:  static utilites are not usually inherited
        // since they are constructor's owm
        // but true inheritance means => all inherited


// parent constructor
function Boss(name, age, aura) {
    this.name = name,
    this.age = age,     
    this.aura = aura    // not inherited
}

// parent static utility
Boss.topSalaryGrade = function() {
    console.log('Boss salary grade is E6 (>25 LPA)')
}

// parent's prototype
Boss.prototype.greetings = function() {
    console.log(`${this.name} wishes you a happy new year!`)
}

// child constructor
function Labour(name,age,category) {
    this.name = name,
    this.age = age,
    this.category = category
}

// child static utiility
Labour.bottomSalaryGrade = function() {
    console.log('Employee salary grade is E1 ( <4 LPA)')
}

// child prototype
Labour.prototype.workHard = function() {
    console.log(`${this.name} needs to perform better!`)
}



// inherit static utility
Labour.__proto__ = Boss

// inherit prototype properties
Labour.prototype.__proto__ = Boss.prototype


// create child instance
const nishant  = new Labour('Nishant Nimish', 31, 'low')
console.log(nishant)    // Labour { name: 'Nishant Nimish', age: 31, category: 'low' }

// access Labour properties
Labour.bottomSalaryGrade()  // Employee salary grade is E1 ( <4 LPA)
nishant.workHard()          // Nishant Nimish needs to perform better!

// access Boss properties
Labour.topSalaryGrade()     // Boss salary grade is E6 (>25 LPA)
nishant.greetings()         // Nishant Nimish wishes you a happy new year!


// general
console.log(Labour.bind)        // [Function: bind]
console.log(nishant.toString)   // [Function: toString]