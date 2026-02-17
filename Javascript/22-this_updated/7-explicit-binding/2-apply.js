// agenda: apply method
// use for explicit "this" binding to an object
// loose binding

// case 
// random fn -> random obj -> bind this to object using "apply"
// notice how this refers object post bind
function printName(gid,eid) { console.log(`name: ${this.fName}, governmentid: ${gid}, employeeid: ${eid}`)}
const user1 = { fName: 'Ankit'}
printName.apply(user1,['001','ABC'])                // name: Ankit, governmentid: 001, employeeid: ABC