// PROMISE HELL
// Understand promise chaining by solving this puzzle
// very unclean code and multiple .then blocks dependent on each other (promise HELL)
// a better approach is to use Promise chaining - see 6B-chain


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
        .then((value) => {
            lock(value)
                .then((data) => { console.log(data) })
                .catch((err) => { console.log('Inner', err) })
        })
        .catch((err) => { console.log('Outer', err) })
}
const puzzleSolved = () => {
    goodKey()
        .then((value) => {
            lock(value)
                .then((data) => { console.log(data) })
                .catch((err) => { console.log('Inner ring road error bloack') })
        })
        .catch((err) => { console.log('Outer ring road error bloack') })
}

puzzleNotSolved()
puzzleSolved()

// Inner Die motherfucker!
// Gold is situated in Rhodesia. Run!!!