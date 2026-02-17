// METHOD - valueOf

// str.valueOf()

// on paper looks similar to toString but leave for future dicussion


const str1 = "Hello"
const str2 = new String("World")

const strVal1 = str1.valueOf()
const strVal2 = str2.valueOf()

console.log(`str1-type: ${typeof str1} strVal1: ${strVal1} strVal1-type: ${typeof strVal1}`)
// str1-type: string strVal1: Hello strVal1-type: string

console.log(`str2-type: ${typeof str2} strVal2: ${strVal2} strVal2-type: ${typeof strVal2}`) 
// str2-type: object strVal2: World strVal2-type: string