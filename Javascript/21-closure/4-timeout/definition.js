// Advanced JS concept
// Closure cares only function definition not where/when function is executed
// This example shows you the reason
// This example also explains what JS does at fn creation time and what it does at execution time
// VERY IMPORTANT EXAMPLE - DEPTH WISE
// Explanation : GPT

// cb is defined in [GEC, local]
// looks for "primeminister" in own local => and global scope (lexical/closure) => cannot find
// throws reference error
    // gpt: why code does not fail at function (cb) definiton time but
    // at parliament execution time


function cb() {
    console.log(primeMinister)
}

function parliament() {
    const primeMinister = 'Netanyahu'
    setTimeout(cb, 2000);
}

parliament()
