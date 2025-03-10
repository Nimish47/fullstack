/**
 * DESTRUCTURING AND FUNCTIONS
 * An object can be passed as parameter to a function. That function may utilise only certain object
 * properties. That's where destructuring is important.
 * 2 rules:
 *  - destructure the object at the time of function definition
 *  - pass complete object at time of function calling 
 */

let obj = {
    firstName: "Ankesh",
    age: 18,
    address: {
        state: {
            desc: 'Patna'
        }
    }
}

const adult = ({ age }) => {
    console.log(`You are ${age} years old`)
}

const greet = ({ firstName: name, address: { state: { desc } } }) => {
    console.log(`Hello folks I'm ${name} from ${desc}`)
}

adult(obj)          // You are 18 years old
greet(obj)          // Hello folks I'm Ankesh from Patna
