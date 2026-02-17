/**
 * FUNCTIONS IN OBJECT
 * In javascript, we can have functions inside objects
 * In javascript, methods are also properties (with type function).
 * Functions can be defined in three ways in objects:
 *      a. Normal functions
 *      b. Arrow functions
 *      c. Shorthand
 * To access object's properties from inside object's function:
 *      - we use 'this' keyword
 *      - this.objectkeyName
 *      - however, we cannot access object properties from an arrow function (see type 2),
 *        because 'this' works differently in arrow function  
 *  */


// type 1 - Normal functions
let obj1 = {
    firstname: 'Akki',
    age: 18,
    voteFunc: function (age) {
        if (age > 18) return `${this.firstname} can vote`
        else return 'Still a minor'
    }
}

// type 2 -  Arrow functions
let obj2 = {
    firstname: 'Nakul',
    age: 18,
    voteFunc: (age) => {
        if (age > 18) return `${this.firstname} can vote`
        else return 'Still a minor'
    }
}

// type 3 - shorthand
let obj3 = {
    firstname: 'Paki',
    age: 18,
    voteFunc(age) {
        if (age > 18) return `${this.firstname} can vote`
        else return 'Still a minor'
    }
}

console.log(obj1.voteFunc(19))      // Akki can vote

// this.firstname returns undefined in arrow function
console.log(obj2.voteFunc(19))      // undefined can vote
console.log(obj2.voteFunc(15))      // Still a minor


console.log(obj3.voteFunc(19))      // Paki can vote