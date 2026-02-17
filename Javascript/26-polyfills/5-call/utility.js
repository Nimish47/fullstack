// call polyfill

// signature
// fn.call(obj,params)

Function.prototype.myCall = function (obj, ...paramsArr) {

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

    // store result
    const result = obj[tempFn](...paramsArr)

    // delete temporary fn
    delete obj[tempFn]

    // return result
    return result
}

const obj = { fName: 'Shadab', lName: 'Khan' }
function print(id) { console.log(id, this.fName, this.lName) }

// call
print.call(obj, 23)                      // 23 Shadab Khan

// mycall   
print.myCall(obj, 23, 46)                 // 23 Shadab Khan