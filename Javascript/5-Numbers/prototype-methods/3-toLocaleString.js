// METHOD - toLocaleString
// Number.toLocaleString(locale)
// used to convert large numbers into more "readable" format as per locale countrry defined
// returns a string

const num = 1000000

const locale1 = num.toLocaleString('en-US')
const locale2 = num.toLocaleString('en-IN')

console.log(`locale1: ${locale1} type: ${typeof locale1}`)        // locale1: 1,000,000 type: string
console.log(`locale2: ${locale2} type: ${typeof locale2}`)        // locale2: 10,00,000 type: string

const num2 = 100

const locale3 = num2.toLocaleString()

console.log(`locale3: ${locale3} type: ${typeof locale3}`)        // locale1: 100 type: string
