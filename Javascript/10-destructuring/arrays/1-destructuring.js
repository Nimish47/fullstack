/**
 * Array Destructuring
 * basics:
 *      - const arr = ["apple", "lichi", "mangoes"]
 *      - const [fruit1, fruit2, fruit3] = arr
 *      - same as:  const fruit1 = arr[0], same for fruit2 and fruit3
 * a shorthand to store array elements into individual variables
 * variables store array elemnts in same order as array is defined
 * default value:
 *      - if incoming value of fruit 4 is undefined, then it will be equal to "papaya"
 * destructuring inside destructuring
 *      - same process applied in nested array
 * destructure select elements
 *      - store few elements individually (not all)    
 * destructure select elements and REST operator
 *      - store few elements individually and store remaining in an array
 * fetch first and last element
 *      - see code    
 * behind the scenes:
 *      - shallow copy occurs of array elements while they get stored in a variable
 */ 

const { log } = console

const fruits = ["apple", "lichi", "mangoes"]
const employee = ["Nishant", { age: 18 }, [11, 'cricket']]

// basics and set default value
const [fruit1, fruit2, fruit3 = "papaya", fruit4 = "strawberry"] = fruits
log(`${fruit1}, ${fruit2}, ${fruit3}, ${fruit4} `)
// apple, lichi, mangoes, strawberry

// destructuring inside destructuring
const [firstName, ageObj, [players, sports]] = employee
log(`${firstName}, ${JSON.stringify(ageObj)}, ${players}, ${sports} `)
// Nishant, {"age":18}, 11, cricket 

// destructure select elements
const rivers = ["godavari", "narmada", "kaveri"]
const [river1, , river3] = rivers
log(`${river1}, ${river3}`)
// godavari, kaveri

// destructure select elements and REST operator
const persons = ["Ram", "Mangal", "Pandey", "Harish", "Purva", "Ishita", "Jeetu"]
const [person1, person2, ...remainingPersons] = persons
log(`${person1}, ${person2}, ${remainingPersons}`)
// Ram, Mangal, [ 'Pandey', 'Harish', 'Purva', 'Ishita', 'Jeetu' ]

// fetch last element value
const [, , , , , , lastPerson] = persons
log(lastPerson)
// Jeetu

// fetch first element value
const [firstPerson] = persons
log(firstPerson)
// Ram


