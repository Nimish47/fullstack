// reduce method - polyfill


// utility
// with initial value
// reduce without initial value
// []
// [,,23]


Array.prototype.myReduce = function (cb, initial) {

    // validate this and cb
    if (this == null) throw new TypeError("Cannot call map on null or undefined");
    if (typeof cb !== 'function') throw new TypeError("Callback must be a function");

    // initialize
    let start = 0               // index from where to start reduce operation in array
    let acc;

    // initialize starting index of loop
    // initialize starting value of accumulator
    if (arguments.length > 1) acc = initial                 // means initial value is there
     
    // if no initial value
    // handle holes
    // handle empty array
    else {
        for (; start < this.length; start++) {
            if (start in this) {    // check first non empty occurence in array
                acc = this[start]
                start++
                break;
            }
        }
        if (start >= this.length) throw new TypeError("Cannot call reduce on empty or sparse array");
    }

    // loop
    // handle holes
    for (let i = start; i < this.length; i++) {
        if (i in this) {
            acc = cb(acc, this[i], i, this)
        }
    }

    // return
    return acc

}

// testcase
let fn, arr

// with initial
fn = (acc, curr) => acc + curr
arr = [1, 2, 3, 4, 5]
console.log(arr.reduce(fn, 10))                   // 25
console.log(arr.myReduce(fn, 10))                 // 25

// holes + initial
arr = [, , 10,20]
console.log(arr.reduce(fn, 10))                   // 40
console.log(arr.myReduce(fn, 10))                 // 40


// holes + no initial
arr = [, , 10,20]
console.log(arr.reduce(fn))                       // 30
console.log(arr.myReduce(fn))                     // 30


// empty array
arr = []
console.log(arr.reduce(fn,99))                        // 99
console.log(arr.myReduce(fn,99))                      // 99
//console.log(arr.reduce(fn))                          // error
// console.log(arr.myReduce(fn))                        // error

// empty sparse array
arr = [,,,,]
console.log(arr.reduce(fn,20))                        // 20
console.log(arr.reduce(fn,20))                        // 20
// console.log(arr.reduce(fn))                        // error
// console.log(arr.myReduce(fn))                      // error


// advanced case
// explain importance of initial value
arr = ["apple", "oranges", "papaya", "grapes", "papaya", "apple", "oranges", "apple"]
const reducerFn = (acc,item) => {
    if(item in acc) acc[item] = acc[item] + 1
    else acc[item] = 1
    return acc
}
console.log(arr.reduce(reducerFn, {}))               // { apple: 3, oranges: 2, papaya: 2, grapes: 1 }
console.log(arr.myReduce(reducerFn, {}))             // { apple: 3, oranges: 2, papaya: 2, grapes: 1 }