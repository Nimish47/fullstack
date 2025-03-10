// METHOD - toString

// str.toString()
// returns a String data type which is primitive
    // non-primitive String object (See str2) is also converted to primitive string
    // value remains same only data type converted to primitive data type
// oroginal string untouched (strings are immutable in js)    

const str1 = "Hello"                    // type: String  which is primitive
const str2 = new String("World")        // type: Object  which is non-primitive

const strVal1 = str1.toString()         // now type: String, primitive
const strVal2 = str2.toString()         // now type: String: primitive

console.log(`str1-type: ${typeof str1}, strVal1: ${strVal1}, strVal1-type: ${typeof strVal1}`)
// str1-type: string, strVal1: Hello, strVal1-type: string

console.log(`str2-type: ${typeof str2}, strVal2: ${strVal2}, strVal2-type: ${typeof strVal2}`) 
// str2-type: object, strVal2: World, strVal2-type: string