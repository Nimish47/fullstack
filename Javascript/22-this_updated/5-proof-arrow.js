// prove that "this" of arrow fn is calculated at definition time


// case:
// create an object that has an arrow fn
// store the fn in a different variable
// try to print value of this in fn
// try to put the same property to module.exports
// hence proven => points to module obj at initial time only
// call fn via object => still points to module obj => proven


const obj = {
    arr: () => {console.log(this)},
}


// case : norm called immediately
// this = window
obj.arr()                  // refers window


// case : normal not called immediately
// this = window
const later = obj.arr
later()                     // refers window