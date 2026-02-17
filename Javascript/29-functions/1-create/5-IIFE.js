// creating functions via IIFE
// syntax
    // (function definition)(params-passed)



// CASE: normal fns
(function (a, b) {
    console.log(a + b)                          // 5
})(2, 3)



// CASE: arrow fns
((a, b) => {
    console.log(a + b)                          // 30
})(10, 20)

