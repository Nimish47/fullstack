// filter fn utility and its implementation


// utility - beginner
Array.prototype.myFilterBeginner = function (cb) {

    if (this == null) throw new TypeError("Cannot call map on null or undefined");
    if (typeof cb !== 'function') throw new TypeError("Callback must be a function");

    // arr only used to pushing values
    let arr = []

    // everywhere we use this
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (cb(this[i], i, this)) arr.push(this[i])
        }
    }
    return arr
}

// utility - advanced
Array.prototype.myFilterAdvanced = function (cb, externalThis) {

    if (this == null) throw new TypeError("Cannot call map on null or undefined");
    if (typeof cb !== 'function') throw new TypeError("Callback must be a function");

    // we restructure this
    const obj = Object(this)
    const len = obj.length >>> 0

    // arr only used for storing result
    let arr = []

    // now use obj not this
    for (let i = 0; i < obj.length; i++) {
        if (i in obj) {
            if (cb.call(externalThis, obj[i], i, obj)) {
                arr.push(obj[i])
            }
        }
    }
    return arr
}


// test
// all work
console.log([1, 2, 3, 4].filter(x => x > 2))
console.log([1, 2, 3, 4].myFilterBeginner(x => x > 2))
console.log([1, 2, 3, 4].myFilterAdvanced(x => x > 2))
// [ 3, 4 ]
// [ 3, 4 ]
// [ 3, 4 ]


// for different data types - refer map
// for thisArg - refer map