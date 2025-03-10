// PROMISE CHAINING
// better than 6a-chain BUT
// check how asyncAwait/6-promise_vs_asyncAwait makes life easier
// whenever you see multiple then blocks chained
// always use Async/Await in such scenario

const goodKey = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Gold')
        }, 1000);
    })
}

const badKey = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Silver')
        }, 1000);
    })
}

const lock = (key) => {
    if (key == 'Gold') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Gold is situated in Rhodesia. Run!!!')
            }, 1000);
        })
    }
    else {
        return Promise.reject('Die motherfucker!')
    }
}

const puzzleNotSolved = () => {
    badKey()
        .then((value) => lock(value))
        .then((value) => { console.log(value) })
        .catch((err) => { console.log(err) })
}

const puzzleSolved = () => {
    goodKey()
        .then((value) => lock(value))
        .then((value) => { console.log(value) })
        .catch((err) => { console.log(err) })
}

puzzleNotSolved()
puzzleSolved()

// Die motherfucker!
// Gold is situated in Rhodesia. Run!!!