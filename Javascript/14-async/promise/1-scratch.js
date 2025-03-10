// Create a basic promise object from scratch
// a promise object either resolves to a "single" value or gets rejected
// rejection can be due to:
    // network request responses (connection issues, access issues etc)
    // us deliberately doing if certain condN not fulfilled
// a promise gets handled via WEB or NODE APIs so call stack isn't blocked    

// you don't need to return a [resolve OR reject], you can simply resolve/reject it 

const goodPromise = new Promise((resolve, reject) => {
    resolve('I am a good boy!')
})

console.log(goodPromise)    
console.log(goodPromise.then())

goodPromise.then((data)=>{console.log(data)})       
console.log('Will I fire first')


// Promise { 'I am a good boy!' }
// Promise { <pending> }
// Will I fire first
// I am a good boy!