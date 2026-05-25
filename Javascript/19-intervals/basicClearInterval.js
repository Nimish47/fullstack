let counter = 0
let id

id = setInterval(() => {
    counter++
    console.log(counter)

    // stop interval if counter reaches 5
    if (counter === 5) clearInterval(id)
}, 1000);