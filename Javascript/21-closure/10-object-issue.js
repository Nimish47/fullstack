// Objects and closures
// explain object has no closure
// explain object keys form no closure

// case:
// explain lexical search flow by JS for "firstName" 
let oldObject1 = {
  firstname: 'Akki',
  age: 18,
  getName: function () {
    console.log(firstname); // ❌ ReferenceError
  }
}


// case:
// what happens in this case
// is firstName accessible?
// why? why not?
// lexical scope flow that js follows?    
function random1() {
    let firstName = 'alpha'
    let oldObject2 = {
        firstname: 'Akki',
        age: 18,
        getName: function () {
            console.log(firstname);
        }
    }
    return oldObject2
}


// case:
// will id be accessible
// why? why not?
// compare with previous case
// lexical scope flow that js follows?    
const id = '1234'
    let oldObject = {
        firstname: 'Akki',
        age: 18,
        getName: function () {
            console.log(id);
        }
    }

// arrow fn used
// will firstName be accessible?
// why? why not?
// lexical scope flow that js follows?    
function random2() {
    let firstName = 'alpha'
    let oldObject2 = {
        firstname: 'Akki',
        age: 18,
        getName: () => {
            console.log(firstname);
        }
    }
    return oldObject2
}    