console.log('start')

// "var causes issues in a for loop"

// why "var" is bad
// notice how before loop execution "i" hoisted in [GEC,local]
// before timeout executes, its' value already execute to 5
// all i point to one place
// i available to timeout fn via closure to timeout
for (var i = 0; i < 5; i++) {
    setTimeout(function cb() {
        console.log('var', i)       // debug this line
    }, i * 1000);
}


// fix with "let"
// before loop execution 'j' not available
// each iteration => value updates (block scope, GEC)
// j not available to via closure but by lock scope 
// for (let j = 0; j < 5; j++) {
//     setTimeout(function cb() {
//         console.log('let', j)       // debug this line
//     }, j * 1000);
// }

// fixing with var itself
// its like passing a parameter to function
// self calling fn method used but you can also use Saini's way
// for (var flag = 0; flag < 5; flag++) {
//     (function (count) {
//         setTimeout(function cb() {
//             console.log('var-good', count)       // debug this line
//         }, count * 1000)
//     })(flag);
// }


console.log('end')