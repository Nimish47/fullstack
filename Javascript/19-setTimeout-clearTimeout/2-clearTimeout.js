// Basics: The clearTimeout function

const hello = () => {
    console.log('hello buddy')
}

console.log('Start...')

const timeoutId = setTimeout(hello, 1000);
clearTimeout(timeoutId) // cancels execution of add function

console.log('End...')


// Start...
// End...


