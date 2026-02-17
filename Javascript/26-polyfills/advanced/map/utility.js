// map fn utility and its implementation


// case 1: utility - beginner
// covers this = array
// covers this = null/undefined (throws error)
// covers fn check (throws error)
// covers sparse array
Array.prototype.myMapBeginner = function (cb) {

    if (this == null) throw new TypeError("Cannot call map on null or undefined");
    if (typeof cb !== 'function') throw new TypeError("Callback must be a function");

    // arr only used to pushing values
    let arr = new Array(this.length)

    // everywhere we use this
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            arr[i] = cb(this[i], i, this)
        }
    }
    return arr
}

// implementation
// console.log([1, 2, 3].myMapBeginner(x => x))                              // [ 1, 2, 3 ]
// console.log([1,, 3].myMapBeginner(x => x))                                // [ 1, <1 empty item>, 3 ]
// console.log(["apple"].myMapBeginner(x => x.toUpperCase()))                // [ 'APPLE' ]



// utility advanced
// covers beginner all and
// this = object,string,number etc
// externalThis implemented too

Array.prototype.myMapAdvanced = function (cb, externalThis) {

    if (this == null) throw new TypeError("Cannot call map on null or undefined");
    if (typeof cb !== 'function') throw new TypeError("Callback must be a function");

    // we restructure this
    const obj = Object(this)
    const len = obj.length >>> 0

    // arr only used for storing result
    let arr = new Array(len)

    // now use obj not this
    for (let i = 0; i < obj.length; i++) {
        if (i in obj) {
            arr[i] = cb.call(externalThis, obj[i], i, obj)
        }
    }
    return arr
}

// implementation
// console.log([1, 2, 3].myMapAdvanced(x => x))                              // [ 1, 2, 3 ]
// console.log([1,, 3].myMapAdvanced(x => x))                                // [ 1, <1 empty item>, 3 ]
// console.log(["apple"].myMapAdvanced(x => x.toUpperCase()))                // [ 'APPLE' ]


// comparison - map, beginner, advanced
const fn = data => data
let obj;
function comparer(obj) {
    console.log(Array.prototype.map.call(obj, fn))
    console.log(Array.prototype.myMapBeginner.call(obj, fn))
    console.log(Array.prototype.myMapAdvanced.call(obj, fn))
}

// comp1
// string
// all good
obj = "Apple"
// comparer(obj)
// [ 'A', 'p', 'p', 'l', 'e' ]
// [ 'A', 'p', 'p', 'l', 'e' ]
// [ 'A', 'p', 'p', 'l', 'e' ]


// comp2
// object - 1
// all good
obj = { fName: 'Nishant' }
// comparer(obj)
// []
// [ undefined ]
// []

// comp3
// object - 2
// all good
obj = { length: 3 }
// comparer(obj)
// [ <3 empty items> ]
// [ <3 empty items> ]
// [ <3 empty items> ]


// comp4
// object - 3
// advanced more accurate
obj = { length: "apple" }
// comparer(obj)
// []
// [ 'apple' ]
// []



// externalthis implementation
// callback needs to be normal fn
// externalthis = obj2
const cb2 = function(x) {return `${x}-${this.id}`}
const arr2 = [1, 2, 3]
const obj2 = { id: 'Alpha' }

console.log(arr2.map(cb2, obj2))              // [ '1-Alpha', '2-Alpha', '3-Alpha' ]
console.log(arr2.myMapBeginner(cb2, obj2))    // [ '1-undefined', '2-undefined', '3-undefined' ]
console.log(arr2.myMapAdvanced(cb2, obj2))    // [ '1-Alpha', '2-Alpha', '3-Alpha' ]