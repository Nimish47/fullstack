// Using Promise.All in Async/Await
// When we need to handle multiple promises INDEPENDENT of each other, use Promise.All instead.
// Reason: 
    // In asyncFnTraditional():
        // fetchDataOne() blocks code for minimum 2 sec
        // fetchDataTwo() further blocks code for minimum 2 sec
    // In asyncFnNew():
        // fetchDataOne() and fetchDataTwo() both run simultaneously and
        // block code for altogether minimum of 2secs    

const fetchDataOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data 1')
        }, 2000);

    })
}

const fetchDataTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data 2')
        }, 2000);

    })
}

const asyncFnTraditional = async () => {
    const res1 = await fetchDataOne()
    const res2 = await fetchDataTwo()
    console.log(`Old way: ${res1} && ${res2}`) 
}

const asyncFnNew = async () => {
    const [res1,res2] = await Promise.all([fetchDataOne(), fetchDataTwo()])
    console.log(`New way: ${res1} && ${res2}`) 
}

asyncFnTraditional()
asyncFnNew()

// New way: Data 1 && Data 2
// Old way: Data 1 && Data 2