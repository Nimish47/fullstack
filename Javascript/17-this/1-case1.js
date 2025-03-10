// CASE 1. Outside of everything (also called global context) not inside any function
    // NODEJS:
        // Here, 'this' refers to the “module.exports” object, which is specific to the current module.
        // In here, this is contained in module.exports object 
        // initially module.exports is empty. {}

    // BROWSER:
        // refers to window object    
        //  In here, this is contained in the global object which happens to be window object



console.log(this)                          // {}
console.log(this === module.exports)       // true


module.exports.fName = 'Nishant'
console.log(this)                           // { fName: 'Nishant' }

