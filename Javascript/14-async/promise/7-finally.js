// finally handler

// similar to a .then and .catch handler but 
    // a finally block will ALWAYS execute irrespective of if the promise fulfilled or rejected
    // placement order of finally block can vary, we can put it at the very front or put it at the last
    // what is guaranteed however that finally will ALWAYS FIRE



const fetchData = (type) => {
    if (type === "good") {
        return new Promise((res, rej) => {
            res('I am a good boy')
        })
    }
    else {
        return new Promise((res, rej) => {
            rej('I am a bad boy')
        })
    }
}

fetchData('good')
.then((data) => { console.log(data) })
.catch((err) => { console.log(err) })
.finally(() => {console.log('Shree ganeshay namah!')})

fetchData('bad')
.finally(() => {console.log('Shree ganeshay namah!')})
.then((data) => { console.log(data) })
.catch((data) => { console.log(data) })

// I am a good boy
// Shree ganeshay namah!
// Shree ganeshay namah!
// I am a bad boy