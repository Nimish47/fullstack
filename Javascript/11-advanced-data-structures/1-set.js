/**
 * METHOD - SET
 * WHAT
 *  - a data structure used for storing data of any length and kind.
 *  - data in set isn't ordered (as in arrays)
 *  - a good usecase of set is to use it to remove duplicates in an array
 *  - no duplicate data allowed in set
 *      - data equality is decided by:
 *          - for non-prims: if same refrence
 *          - for prim: if same value
 * To define a set:
 *  - new Set()  
 *      - create empty set
 *      - let list1 = new Set()
 *  - new Set(iterable)
 *      - initialize set with some iterable
 *      - iterable can be array, set or a nodelist
 *      - let list2 = new Set(["apple", 2, true, { name: 'Karan' }]) 
 * Sets are iterable (or looped through!)
 *  loop through:
 *  - means we can loop through them using:
 *      - for of loop
 *          - if using for of loop and and need to access set data, use set.values() 
 *          - set.values() returns an iterator on which we can use a for of loop to access values
 *          - for (const item of list2.values()) { ...logic }
 *      - forEach loop  
 *          - set.forEach((item,index) => { ...logic })
 *          - Note: item and index will return same value (when working with sets)
 *  add:
 *  - set.add(value)
 *  - only one value at a time allowed i.e
 *      - set.add(value1,value2) won't work - only set1 will go through
 *      - set.add([value1,value2]) won't work - entire [value1,value2] will go through
 *  - used to add value to a set
 *  - data in a set is seperated by comma
 *  - modifies original set
 *  delete:
 *  - set.delete(value)
 *  - only one value at a time allowed
 *  - used to delete value from a set
 *  - modifies original set
 *  has:
 *  - set.has(value)
 *  - used to verify a given set contains a particular value
 *  - sets have no indexes, so data in set can be accessed via set.values()
 *  - returns boolean
 *  clear:
 *  - set.clear()
 *  - empty entire set
 *  - modifies orginal set 
 *  size:
 *  - set.size
 *  - return number of elements in a set
 *  The key and value of a set are the SAME
 *      apply setObj.keys() or setObj.values()
 *      you will see both return same values   
 *  */

const { log } = console

let list1 = new Set()
let list2 = new Set(["apple", 2, true, { name: 'Karan' }])

// size
log(list1.size)     // 0
log(list2.size)     // 4

// set.values
log(list2.values())         // [Set Iterator] { 'apple', 2, true, { name: 'Karan' } }

// loop a set - forEach
list2.forEach((item) => { log(item) })
// apple
// 2
// true
// { name: 'Karan' }

// loop a set - for of and values
for (const item of list2.values()) { log(item) }
// apple
// 2
// true
// { name: 'Karan' }

// loop a set - for of and entries
for (const item of list2.entries()) { log(item) }
// [ 'apple', 'apple' ]
// [ 2, 2 ]
// [ true, true ]
// [ { name: 'Karan' }, { name: 'Karan' } ]


// add
list1.add('mangoes')
list1.add('kiwi')
list1.add(['apple', 'bananas'])
log(list1)                      // Set(2) { 'mangoes','kiwi', [ 'apple', 'bananas' ] }

// has
log(list1.has('mangoes'))       // true

// delete
list1.delete('kiwi')
log(list1)                       // Set(2) { 'mangoes', [ 'apple', 'bananas' ] }

// clear
list1.clear()
log(list1)                      // Set(0) {}

// remove duplicates from array
const arr = ['apple', 'bananas', 'oranges', 'papaya', 'apple', 'oranges']
const list3 = new Set(arr)
log(list3)                   // Set(4) { 'apple', 'bananas', 'oranges', 'papaya' }

// a thing about duplicacy
// equality of non-primitives is decided by if they have same reference
// equality of non-primitives is decided by if they have same value 
const list4 = new Set()
list4.add(['apple', 1])     // non-prim added
list4.add('oranges')        // prim added
    
list4.add(['apple', 1])     // non-prim added (will add, as different reference)
list4.add('oranges')        // prim added ( but won't add)

log(list4)                  // Set(3) { [ 'apple', 1 ], 'oranges', [ 'apple', 1 ] }