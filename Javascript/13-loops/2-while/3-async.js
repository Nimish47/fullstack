// async operation in a WHILE loop

const fetchData = (data) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(data.toUpperCase())
    }, 2000)
})

const api = async () => {
    console.log('Start!')
    const arr = ['apple', 'banana', 'oranges']
    let res = [];
    let i = 0;
    while (i < arr.length) {
        const response = await fetchData(arr[i])
        console.log(response)
        res.push(response)
        i++
    }
    console.log(res)
    console.log('End!')
}

api()

// Start!
// APPLE
// BANANA
// ORANGES
// [ 'APPLE', 'BANANA', 'ORANGES' ]
// End!