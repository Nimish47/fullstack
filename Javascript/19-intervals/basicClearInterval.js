let counter = 0


const id = setInterval(() => {
    counter++
    console.log(counter)

    // stop interval if counter reaches 5
    // id is accessible due to closures
    if (counter === 5) clearInterval(id)
}, 1000);