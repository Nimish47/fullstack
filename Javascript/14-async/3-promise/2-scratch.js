// then and catch blocks in action for promises created from scratch

const fetchData = (type) => {
    return new Promise((res, rej) => {
        if (type === "good") res('I am a good boy')
        else rej('I am a bad boy')
    })
}

fetchData('good').then((data) => { console.log(data) })     // I am a good boy
fetchData('bad').catch((data) => { console.log(data) })     // I am a bad boy




// .then is applied on a promise object