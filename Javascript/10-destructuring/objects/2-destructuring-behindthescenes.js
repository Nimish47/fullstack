/**
 * OBJECT DESTRUCTURING IN JAVASCRIPT - BEHIND THE SCENES 
 * newly created variables basically copy object property values
 * shallow copy happens under the hood
 * if newly created variable extracts primitive object property:
 *  - copy by value occurs
 *  - hence, modifying the new created variable does not modify original object property
 * if newly created variable extracts non-primitive object property:
 *  - copy by reference occurs
 *  - hence, modifying the new created variable modifies original object property
 */

const obj = {
    firstName: "Ankesh",
    age: 18,
    marks: [100, 87],
    address: {
        state: {
            desc: 'Patna'
        }
    }
}

let { firstName, marks, address } = obj
console.log(firstName)      // Ankesh

firstName = "Prashant"
marks = [20, 40]            
address.state.desc = "Ranchi"

console.log(obj)
/**
{
  firstName: 'Ankesh', age: 18,
  marks: [ 100, 87 ], address: { state: { desc: 'Ranchi' } 
}
 */