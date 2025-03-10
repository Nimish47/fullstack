// then and catch blocks in action for promises created from scratch

const fetchData = (type) => {
    if (type === "good") {
        return new Promise((res, rej) => {
            res('I am a good boy')
        })
    }
    else {
        return new Promise((res, rej) => {
            rej('I am a bad boy')
        })
    }
}

fetchData('good').then((data) => { console.log(data) })     // I am a good boy
fetchData('bad').catch((data) => { console.log(data) })     // I am a bad boy