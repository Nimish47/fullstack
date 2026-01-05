// Inside an object's method
    // calling this from an Object's method (Arrow) 
        // Syntax:
            // object1.arrowfunction1()
                // in this scenario, 'this' inside arrowfunction1 refers to:
                    // NodeJS: module.exports object (outer scope reference when function called)
                    // Browser: window object (outer scope when reference when function called)

const { log } = console;

// updated
// object has no scope
// lexical points to global context in this case
// it doesn't matter who or how getName is called, it's value was already calculated at definition time

const obj = {
    firstname: 'Akki',
    age: 18,
    getName: () => {
        console.log(this)
        console.log(this === module.exports)
        return this.firstname
    }
}

// this is where value of this is decided - at call time
log(obj.getName())
// {}
// true
// undefined