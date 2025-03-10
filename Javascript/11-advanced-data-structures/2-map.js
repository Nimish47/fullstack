/**
 * METHOD - MAP
 * WHAT
 *  - a data structure used for storing data of any length and kind.
 *  - similar to object (key and value pair)
 *  - no duplicate key allowed in map
 * To define a map:
 *  - new Map()  
 *      - create empty map
 *      - let list = new Map()
 *  - new Map([ [key1,value1], [key2,value2], [key3,value3] ])
 *      - key(s) can be anything but should be unique
 *      - value(s) can be anything         
 *      - let list = new Map([['employee', { name: 'Aman', age: 18 }]])
 * Maps are iterable (or looped through!)
 *  loop through:
 *  - means we can loop through them using:
 *      - for of loop (access only values, not keys): use map.values and for of loop: 
 *          - if using for of loop and and need to access map values only, use map.values() 
 *          - map.values() returns an iterator on which we can use a for of loop to access values
 *          - for (const item of map.values()) { ...logic }
 *      - for of loop (access only keys, not values): use map.keys and for of loop: 
 *          - if using for of loop and and need to access map values only, use map.keys() 
 *          - map.keys() returns an iterator on which we can use a for of loop to access keys
 *          - for (const item of map.keys()) { ...logic }
 *      - for of loop (access both keys and values): use map.entries and for of loop: 
 *          - if using for of loop and and need to access map values only, use map.entries() 
 *          - map.entries() returns an iterator on which we can use a for of loop to access keys
 *          - for (const item of map.entries()) { ...logic } 
 *      - forEach loop  
 *          - map.forEach((item,index) => { ...logic })
 *          - Note: item and index will return value and key respectively
 *  set:
 *  - map.set(key, value)
 *  - only one (key,value) added at a time allowed i.e
 *  - used to add (key,value) to a map
 *  - data in a map is seperated by comma
 *  - modifies original map
 *  delete:
 *  - map.delete(key)
 *  - only one key at a time allowed
 *  - used to delete (key,value) from a map
 *  - modifies original set
 *  has:
 *  - set.has(key)
 *  - used to verify a given set contains a particular (key,value)
 *  - returns boolean
 *  clear:
 *  - map.clear()
 *  - empty entire map
 *  - modifies orginal map 
 *  size:
 *  - map.size
 *  - return number of (key,value) pairs in a map   
 *  */

const { log } = console

// initialization
let list1 = new Map()
let list2 = new Map([['category', 'Grocery'], ['amount', 999]])
let list3 = new Map([['employee', { name: 'Aman', age: 18 }]])

log(list1)      // Map(0) {}
log(list2)      // Map(2) { 'category' => 'Grocery', 'amount' => 999 }  
log(list3)        // Map(1) { 'employee' => { name: 'Aman', age: 18 } }  

// size
log(list1.size)     // 0
log(list2.size)     // 2    

// loop - for of (entries)
   for (const item of list2.entries()) { log(item) }
// [ 'category', 'Grocery' ]
// [ 'amount', 999 ]

// loop - for of (values)
   for (const item of list2.values()) { log(item) } 
// Grocery
// 999

// loop -for of (keys)
   for (const item of list2.keys()) { log(item) }
// category
// amount

// loop - forEach
   list2.forEach((item, index) => { log(`Index: ${index}, Item: ${item}`) })
// Index: category, Item: Grocery
// Index: amount, Item: 999

// set
   list1.set('name', 'Anshu')
   list1.set('age', 25)
   log(list1)      // Map(2) { 'name' => 'Anshu', 'age' => 25 }

// has
   log(list1.has('age'))   // true

// delete
   list1.delete('age')
   log(list1)          // Map(1) { 'name' => 'Anshu' }

// clear
   list1.clear()
   log(list1)              // Map(0) {}

