// map fn utility and its implementation


// utility
// covers this = array
// covers this = null/undefined (throws error)
// covers fn check (throws error)
// covers sparse array
Array.prototype.myMap = function (cb,thisArg) {

    // utility called by null/undefined
    if (this == null) throw new TypeError("Cannot call map on null or undefined");
    
    // utility called by a non-fn
    if (typeof cb !== 'function') throw new TypeError("Callback must be a function");

    // arr only used to pushing values
    // length needs to be preserved
    let arr = new Array(this.length)

    // everywhere we use 'this'
    for (let i = 0; i < this.length; i++) {
        if (i in this) {            // skips holes
            arr[i] = cb.call(thisArg,this[i], i, this)
        }
    }
    return arr
}

// implementation
console.log([1, 2, 3].myMap(x => x))                              // [ 1, 2, 3 ]
console.log([1,, 3].myMap(x => x))                                // [ 1, <1 empty item>, 3 ]
console.log(["apple"].myMap(x => x.toUpperCase()))                // [ 'APPLE' ]


// externalthis implementation
// callback needs to be normal fn
// this inside callback fn = obj2
const cb2 = function(x) {return `${x}-${this.id}`}
const arr2 = [1, 2, 3]
const obj2 = { id: 'Alpha' }

console.log(arr2.map(cb2, obj2))              // [ '1-Alpha', '2-Alpha', '3-Alpha' ]
console.log(arr2.myMap(cb2, obj2))            // [ '1-Alpha', '2-Alpha', '3-Alpha' ]