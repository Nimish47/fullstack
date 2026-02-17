// Agenda: The meaning of an explicit bind and the need for it


// a simple object
const obj1 = { fName: 'Ankita', norm: function () { console.log(this.fName) } }
const obj2 = { fName: 'Vaishali' }

// case: Explain importance of call,apply,bind
// try to access obj1's method via obj2 - not possible
// obj2.obj1.norm()                        // error thrown


// case: Solve above issue using call
obj1.norm.call(obj2)                      // Vaishali

