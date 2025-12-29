// Zero delay- really!

const hello = () => {
    console.log('Hello Buddy')
}

console.log('Start...')

const timeoutId = setTimeout(hello, 0);

console.log('One')
console.log('Two')
console.log('Three')
console.log('End')


// Start...
// One
// Two
// Three
// End
// Hello Buddy


