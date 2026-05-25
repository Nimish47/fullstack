
// case 1
// closure needed
const x = "apple"
var y = "bear"
function yesClosure() {
    console.log(x, y)
}
yesClosure()

// case 2
// perfect example of shadowing
// Closure not needed
// same EC but diff scope - Local wins over Closure
const a = "papaya"
var b = "tiger"
function noClosure() {
    const a = "banana"          // allowed as EC is diff
    var b = "lion"              // allowed as EC is diff
    console.log(a, b)
}
noClosure()

// case 3
// only closure q needed
const p = 'neem'
const q = 'Zimbabwe'
function type3() {
    const p = 'tulsi'
    console.log(p, q)
}

type3()


