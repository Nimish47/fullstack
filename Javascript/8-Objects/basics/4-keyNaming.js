/**
 * NAMING OF KEYS IN JAVASCRIPT
 * If keyname is multi-worded: wrap them in quotes as strings (otherwise throws error)
 *      - const obj = { 'first name': 'Nishant' }
 * If keyname is single-worded: optional, need not wrap them, JS behind the scenes converts them to strings
 *      - const obj = { fullname: 'Nishant' }
 * To ACCESS a multi-word keyname:
 *      - use [] bracket notation
 *          - obj['first name']
 *      - don't use (.) notation (throws error)
 *          - obj.first name   // throws error 
 *  */ 


//  throws error
// const obj = {
//     first name: "Nishant",
//     age: 18
// }

const obj = {
    'first name': 'Nishant',
    age: 18
}

// to access need to use [] and not .
// console.log(obj.first name)         // throws error
console.log(obj['first name'])         // Nishant