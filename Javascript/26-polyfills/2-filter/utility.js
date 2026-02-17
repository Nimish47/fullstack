// filter fn utility and its implementation


// utility
Array.prototype.myFilter = function (cb,thisArg) {

    if (this == null) throw new TypeError("Cannot call map on null or undefined");
    if (typeof cb !== 'function') throw new TypeError("Callback must be a function");

    // arr only used to pushing values
    // no need to preserve length
    let arr = []

    // everywhere we use this
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (cb.call(thisArg,this[i], i, this)) arr.push(this[i])
        }
    }
    return arr
}

// test
// all work
console.log([1, 2, 3, 4].filter(x => x > 2))
console.log([1, 2, 3, 4].myFilter(x => x > 2))
// [ 3, 4 ]
// [ 3, 4 ]


// for thisArg - refer map