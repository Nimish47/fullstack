// prove that "this" of normal fn is calculated at run-time


// case:
// create an object that has a normal fn
// store the fn in a different variable
// try to print value of this in fn
// does not point to object

const obj = {
    norm: function() {console.log(this)},
}


// case : norm called immediately
// this = obj
obj.norm()                  // {norm: ƒ} 


// case : normal not called immediately
// this = window
const later = obj.norm
later()                     // refers window