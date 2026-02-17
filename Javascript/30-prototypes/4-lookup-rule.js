// explaining lookup rule
// priority rule
    // own
    // proto chain....
    // until null reached


// CASE: create a sample object
const base = { country: 'Australia', id: 'AID' }
const child = Object.create(base)
child.city = 'Melbourne'
child.id = 'MID'    

// CASE: shadowing
// conflict - own gets preference
console.log(child.id)                           // MID

// CASE: not in 'own'
// search __proto__
console.log(child.country)                      // Australia

// CASE: not in 'own'
// search __proto__
console.log(child.toLocaleString())             // [object Object]

// CASE: not in 'own'
// not in __proto__ !!!! lol
// not found in even Object.prototype
console.log(child.notfound)                     // undefined



