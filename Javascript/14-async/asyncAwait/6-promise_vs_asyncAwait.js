// Async/Await over Promises - USE CASE
// just compare it with promise/6B-chain
// how much more readable our functions are - puzzleNotSolved() and puzzleSolved

// whenever you seePromise chaining,
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


const puzzleNotSolved = async () => {
    try {
        const key = await badKey()
        const res = await lock(key)
        console.log(res)

    } catch (error) {
        console.log(error)
    }

}

const puzzleSolved = async () => {
    try {
        const key = await goodKey()
        const res = await lock(key)
        console.log(res)

    } catch (error) {
        console.log(error)
    }

}

puzzleNotSolved()
puzzleSolved()

// Die motherfucker!
// Gold is situated in Rhodesia. Run!!!