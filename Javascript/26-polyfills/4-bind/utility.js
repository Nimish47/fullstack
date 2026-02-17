// bind utility in javascript

// signature
// fn.bind(obj,params)

Function.prototype.myBind = function (obj, ...params1) {

    // check if caller is fn
    if (typeof this !== "function") {
        throw new TypeError("myCall must be called on a function")
    }

    // that's how native bind works
    // no params check in bind
    // no obj null check in bind
    // no primitive autoboxing in bind

    const originalFn = this

    function bounded(...params2) {
        // call with new and call without new
        const isCalledWithNew = this instanceof bounded
        const finalThis = isCalledWithNew ? this : obj
        return originalFn.apply(finalThis, [...params1, ...params2])
    }
    // prototypal fix
    // its not inheritence, remember
    // Object.create more safe
    bounded.prototype = Object.create(originalFn.prototype)
    return bounded
}


// 3 Test Cases
function print(id) { console.log(id, this.fName, this.lName) }
const india = { fName: 'Ajeet', lName: 'Bharti' }
const pak = { fName: 'Parvez', lName: 'Musharraf' }
const aus = { fName: 'Alex', lName: 'Ferguson' }



// case 1 - normal + partial app
// original
const boundA = print.bind(india)
// boundA("Alpha")                                     // Alpha Ajeet Bharti

// myBind
const boundB = print.myBind(pak)
// boundB("Alpha")                                     // Alpha Ajeet Bharti


// case 2 - rebinding
// original
const boundAA = boundA.bind(aus)
// boundAA("Beta")                                         // Beta Ajeet Bharti

// myBind
const boundBB = boundB.myBind(aus)
// boundBB("Beta")                                         // Beta Parvez Musharraf


// case 3 - with 'new' 
const obj = { company: 'Wipro' }
function User() { console.log(this) }
User.prototype.sayHi = function () { console.log('Hi buddy') }

//bind
const Boundnew = User.bind(obj)
Boundnew()                                                //  { company: 'Wipro' }
const val = new Boundnew()                                // User {} // value of this // an empty object
console.log(val)                                          // User {}
val.sayHi()                                               // Hi buddy


// mybind - without implementing new feature
const Boundnew2 = User.myBind(obj)
Boundnew2()                                                //  { company: 'Wipro' }
const val2 = new Boundnew2()                               //  bounded {}
console.log(val2)                                          //  bounded {}
val2.sayHi()                                               // Hi budddy