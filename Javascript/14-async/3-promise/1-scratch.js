// Create a basic promise object from scratch
// a promise object either resolves to a "single" value or gets rejected 
// rejection can be due to:
    // network request responses (connection issues, access issues etc)
    // us deliberately doing if certain condN not fulfilled
// a promise gets handled via WEB or NODE APIs so call stack isn't blocked

// return a resolve/reject -> be careful

const goodPromise = new Promise((resolve, reject) => {
    resolve('I am a good boy!')
    console.log('I will execute if you do not return a resolve')
})

console.log(goodPromise)    

goodPromise.then((data)=>{console.log(data)})       
console.log('Will I fire first')


// Promise {<fulfilled>: 'I am a good boy!'}
// Will I fire first
// I am a good boy!