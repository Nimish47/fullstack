// curry a simple add fn that takes three params => using normal fn and then transform it to arrow fn

// analyze closures in devtools

// without currying
function normAdd(a, b, c) { console.log('normal add', a + b + c) }
normAdd(10, 20, 30)       // normal add 60

// using normal fn
function curryNormAdd(a) {
    return function (b) {
        return function (c) {
            console.log('Norm curry add', a + b + c)
        }
    }
}

curryNormAdd(10)(20)(30)        // Norm curry add 60

// using arrown fn
// start converting from deepest and move to top layer
const curryArrAdd = a => b => c => console.log('Arrow curry add', a + b + c)
curryArrAdd(10)(20)(30)         // Arrow curry add 60