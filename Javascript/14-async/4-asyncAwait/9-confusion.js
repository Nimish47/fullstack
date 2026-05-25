// return value of an async fn is always a promise object

async function sync1() { return 'Sync1' }
async function sync2() { return 'Sync2' }

async function main() {
    const data1 = await sync1()
    const data2 = await sync2()
    console.log(data1, data2)
}

main()  
// Sync1 Sync2