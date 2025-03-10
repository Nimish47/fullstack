// async operation in a FOR IN loop

const fetchData = (data) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(data.toUpperCase())
    }, 2000)
})

const api = async () => {
    console.log('Start!')
    const obj = { fName: 'Mahendra', mName: 'Singh', lName: 'Dhoni' }
    let res = [];

    for (const key in obj) {
        const response = await fetchData(obj[key])
        console.log(response)
        res.push(response)
    }
    console.log(res)
    console.log('End!')
}

api()

// Start!
// MAHENDRA
// SINGH
// DHONI
// [ 'MAHENDRA', 'SINGH', 'DHONI' ]
// End!