function startProcess(input) {

    return new Promise((resolve, reject) => {
        if (!input) return reject('Invalid input')
        return resolve(input)
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
    console.log('Checking eligibility for', salary)

    return new Promise((resolve, reject) => {
        const data = { eligible: true }                          // some real time data fetching
        if (!data) return reject('Error validating eligibility')
        setTimeout(() => resolve(data), 2000)                   // mock a network call etc
    })
}

function displayResult(result) {
    console.log('Congratulations!', result)
}

// async fn
async function main(input) {
    try {
        const id = await startProcess(input)
        const user = await fetchUser(id)
        const pan = await fetchPAN(user)
        const salary = await fetchSalary(pan)
        const result = await checkEligibility(salary)
        displayResult(result)
    } catch (error) {
        console.log(error)
    }

}

// fire the fn
const incomingValue = 'Alpha123'
main(incomingValue)