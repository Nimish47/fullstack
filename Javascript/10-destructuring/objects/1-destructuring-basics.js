/**
 * DESTRUCTURING IN OBJECTS
 *  - TRADITIONAL APPROACH to extract object property value (and store in new variable)
 *      -  scope keyname1 = obj.keyname1
 *  - WHY destructuring?
 *      - destructuring is more clean and multiple object properties can be extracted in one line of code
 *      - better than traditional approach
 *  scope {keyname1,keyname2} = obj
 *  - ex- const {firstName, age} = studentObj
 *  - scope can be let or const
 *  - on the left side of the expression, we pick the object key (keyname1,keyname2,..)
 *    and place it inside the {}. It also becomes the newly created variable name to hold the
 *    property value of specified scope.
 *  - The right side of the expression is the actual object fom which we extract the value
 *  - Different ways to destructure:
 *     1. default value:
 *        - scope {keyname = defaultvalue} = obj
 *        - if object has a keyname property, newly created variable will store value of key = keyname in obj
 *        - else if no keyname property in object, newly created variable will store defaultvalue 
 *     2. aliases:
 *        - scope {keyname : aliasName1} = obj
 *        - same as before, only diff is that newly created variable's name would be aliasName1 and not keyname1
 *     3. access nested properties:
 *        - scope {keyname: {subkey1: {subkey2...and so on} }}
 *        - const {location: {state: {city}}}  
 *        - difficult to defined check example
 *        - basically just continue to destructure as object is defined
 *        - Note: newly created variable will be innermost child key's as its name and
 *           its value stored in it. Like here, new created variable will be city and its value
 *     4. 
 *        - scope {keyname1, keyname2, keyname3 = `${keyname 1} ${keyname2}`} = obj
 *        - ex: const {firstName, lastName, fullName = `${firstname} ${lastname}`} = obj
 *        - a scenario where keyname3 is created using values of keyName1 and keyname2 on the go.  
 *     5. Destructure select elements and REST operator
 *          - store few elements individually and store remaining in a diff object
 *                
 *      
 

*/ 


const obj = {
    firstName: "Ankesh",
    lastName: "Chowdhary",
    age: 18,
    marks: [100, 87],
    address: {
        state: {
            desc: 'Patna'
        }
    }
}

let { firstName, marks, age = 23, grade = "inprogress", address: { state: { desc } } } = obj

console.log(firstName)          // Ankesh
console.log(marks)              // [100,87]

// to access address, simply let {address} = obj
// console.log(address)         // can't access like this, throws error

// to access state, simply let {address:{state}} = obj
// console.log(state)           // can't access like this, throws error
console.log(desc)               // Patna
console.log(age)                // 18
console.log(grade)              // inprogress


let { marks: score, address, firstNaame, lastName, studentName = `${firstName} ${lastName}` } = obj

console.log(score)                  // [ 100, 87 ]
console.log(address)                // { state: { desc: 'Patna' } }
console.log(studentName)            // Ankesh Chowdhary