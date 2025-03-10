// Inside an object's method

// calling this from an Object's method (normal) 
    // Syntax:
        // object1.function1()
            // in this scenario, 'this' inside function1 refers to object1
            // The value of this is the object “before dot”, the one used to call the method.
            // The rule is simple: if obj.f() is called, then 'this' is obj during the call of f.    

// // one of the usecases of this            
// Why we use 'this'? Simple use case below:
    // inside getName fn, we cannot directly reference firstname,we need to use this.firstname
    // when an objects method needs to acces object's properties
    // can't reference property without 'this', throws error.


const { log } = console;

let oldObject = {
    firstname: 'Akki',
    age: 18,
    getName: function () {
        console.log(this)
        // console.log(firstname)        // will throw error, firstname is not defined
        return this.firstname           // hence we need to use this.firstname
    }
}

let newObject = {
    firstname: 'Paki',
    age: 18,
    getName() {
        console.log(this)
        return this.firstname
    }
}

// Here during the execution of getName(), the value of this will be oldObject.
// this is where value of this is decided - at call time
log(oldObject.getName())
// { firstname: 'Akki', age: 18, getName: [Function: getName] }
// Akki


// Here during the execution of getName(), the value of this will be newObject.
// this is where value of this is decided - at call time
log(newObject.getName())
// { firstname: 'Paki', age: 18, getName: [Function: getName] }
// Paki