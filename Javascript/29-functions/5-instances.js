// Analyzing Function's instances



// function declaration
function User() { }

// CASE: check __proto__ === Function.prototype
console.log(User.__proto__)                 // refers Function.prototype


// CASE: access Function.prototype properties
console.log(User.prototype)                 // {}