// Closure does a copy by value OR copy by reference - Example 2??
// answer: copy by reference
// a weird example taht opens your mind

let id = '1234'

function printId() {
    console.log(id)
}

id = '5678'

printId()   // 5678