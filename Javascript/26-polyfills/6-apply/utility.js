// apply polyfill

// signature
// fn.apply(obj,paramsArr)

// utility
Function.prototype.myApply = function (obj, paramsArr) {

    // check if caller is fn
    if (typeof this !== "function") {
        throw new TypeError("myCall must be called on a function")
    }

    // check obj null or undefined
    if (obj == null) obj = globalThis

    // if obj = primitive, convert to wrapper obj
    // box
    obj = Object(obj)

    // unique temporary property
    const tempFn = Symbol("fn")
    obj[tempFn] = this

    // check array parameter
    // store result
    let result;
    if (paramsArr == null) result = obj[tempFn]()
    else result = obj[tempFn](...paramsArr)

    // delete temporary fn
    delete obj[tempFn]

    // return result
    return result
}

const obj = { fName: 'Shadab', lName: 'Khan' }
function print(arr) { console.log(arr.length, this.fName, this.lName) }

// apply
print.apply(obj, [23,46])                      // 2 Shadab Khan

// myApply   
print.myApply(obj, [23, 46])                 // 2 Shadab Khan