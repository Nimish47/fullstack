// agenda: call method
// use for explicit "this" binding to an object
// loose binding

// case: 
// random fn -> random obj -> bind this to object using "call"
// notice how this refers object post bind
function printName(id) { console.log(`name: ${this.fName}, id: ${id}`)}
const user1 = { fName: 'Ankit'}
printName.call(user1,'001')             // name: Ankit, id: 001
