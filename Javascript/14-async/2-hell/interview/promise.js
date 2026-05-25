// solve callback hell with promises
// always 'return' resolve/reject -> else code below also executed!
// 'return' marks at this point we are cool to exist the function - our work is done!

function startProcess(input) {
    return new Promise((resolve, reject) => {
        if (!input) return reject('Invalid input')
        return resolve(input)
        // console.log('I am still executed even if reject/resolve called', 'use return always!')
    })
}

function fetchUser(id) {
    console.log('Fetch user details for', id)

    return new Promise((resolve, reject) => {
        const data = { name: 'Aniket', age: 29 }                // some real time data fetching
        if (!data) return reject('Error fetching user data')
        setTimeout(() => resolve(data), 2000)                   // mock a network call etc
    })
}

function fetchPAN(user) {
    console.log('Fetch pan details for', user)

    return new Promise((resolve, reject) => {
        const data = { pan: '!2345ffff' }                       // some real time data fetching
        if (!data) return reject('Error fetching pan data')
        setTimeout(() => resolve(data), 1000)                   // mock a network call etc
    })
}

function fetchSalary(pan) {
    console.log('Fetch salary details for', pan)

    return new Promise((resolve, reject) => {
        const data = { salary: 550000 }                         // some real time data fetching
        if (!data) return reject('Error fetching salary')
        setTimeout(() => resolve(data), 2000)                   // mock a network call etc
    })
}

function checkEligibility(salary) {
    console.log('Checking eleigibility for', salary)

    return new Promise((resolve, reject) => {
        const data = { eligible: true }                          // some real time data fetching
        if (!data) return reject('Error validating eligibility')
        setTimeout(() => resolve(data), 2000)                   // mock a network call etc
    })
}

function displayResult(result) {
    console.log('Congratulations!', result)
}


// fire the process
const incomingValue = 'Alpha123'
//const incomingValue = null

startProcess(incomingValue)
    .then(id => fetchUser(id))
    .then(user => fetchPAN(user))
    .then(pan => fetchSalary(pan))
    .then(salary => checkEligibility(salary))
    .then(result => displayResult(result))
    .catch(err => console.log(err))