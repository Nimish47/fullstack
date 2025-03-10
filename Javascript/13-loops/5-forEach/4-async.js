// async operation in a FOREACH loop

const fetchData = (data) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(data.toUpperCase())
    }, 2000)
})

const api = async () => {
    console.log('Start!')
    const arr = ['apple', 'banana', 'oranges']
    let res = [];

    arr.forEach(async (item) => {
        const response = await fetchData(item)
        console.log(response)
        res.push(response)
    })
    console.log(res)
    console.log('End!')
}

api()

// Start!
// []
// End!
// APPLE
// BANANA
// ORANGES