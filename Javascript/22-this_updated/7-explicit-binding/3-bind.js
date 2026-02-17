// agenda: call method
// use for explicit "this" finding to an object
// hard binding

// case: 
// random fn -> random obj -> bind this to object using "bind"
function printName(gid,eid) { console.log(`name: ${this.fName}, governmentid: ${gid}, employeeid: ${eid}`)}
const user1 = { fName: 'Ankit' }
const later = printName.bind(user1) 
later('123', 'ABC')                         // name: Ankit, governmentid: 123, employeeid: ABC

// case: show hard binding scenario
// try to reassign "this" to returned fn via "call"
// we cannot , this = user1 (tied)
const user2 = {fName: 'Pradeep'}
const later2 = later.bind(user2)            // trying to re-bind,not possible
later2('999','XYZ')                         // name: Ankit, governmentid: 999, employeeid: XYZ