// arrow fns do not need call,apply,bind
// explicit binding not possible with arrow fns => this value "fixed" at definition time
// explain why explicit bind works with normal fns => because their this is flexible, decided at run-time


// case: 
// random arrow fn -> random obj -> bind this to object using "call"
// not possible
// this = window
const printName = () => { console.log(this.fName) }
const user1 = { fName: 'Ankit' }
printName.call(user1)             // undefined


// case :
// take a very simple example
// an object -> arrow fn
// try to explicit bind - not possible
// this = undefined
const obj1 = { fName: 'Ankita', arr: () => { console.log(this.fName) } }
const obj2 = { fName: 'Vaishali' }
obj1.arr.call(obj2)                             // undefined