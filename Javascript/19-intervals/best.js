const delay = (ms) => new Promise(res => setTimeout(res, ms))



async function cookLoop(limit) {

  let counter = 0

  while (counter < limit) {
    
    counter++

    console.log('Cooking started', counter)
    await delay(1000)

    console.log('Cooking in progress!', counter)
    await delay(1000)

    console.log('Cooking finished, pizza ready!', counter)
    await delay(1000)
  }
}

cookLoop(3)