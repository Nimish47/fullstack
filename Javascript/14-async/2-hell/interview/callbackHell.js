// explaining callback hell
// explain prod level callbacks used
// proper error first callback signaure
// passing data along the chain
// handling errors
// explaining callback hell

// flow
// start main process (sync)
// fetch user (async)
// fetch pan details (async)
// fetch salary (async)
// check eligibility for credit card (async)
// print (sync)

// startProcess-id-> fetchUser-user-> fetchPAN-pan-> fetchSalary-salary-> checkEligibility-result-> display

function startProcess(input, callback) {
    if (!input) callback('Invalid input', null)
    else callback(null, input)
}

function fetchUser(id, callback) {
    console.log('Fetch user details for', id)       // some realtime fetching
    const data = { name: 'Aniket', age: 29 }

    let err;
    if (!data) err = 'Error fetching user data'

    setTimeout(() => callback(err, data), 2000)
}

function fetchPAN(user, callback) {
    console.log('Fetch pan details for', user)       // some realtime fetching
    const data = { pan: '!2345ffff' }

    let err;
    if (!data) err = 'Error fetching pan data'

    setTimeout(() => callback(err, data), 1000)
}

function fetchSalary(pan, callback) {
    console.log('Fetch salary details for', pan)       // some realtime fetching
    const data = { salary: 550000 }

    let err;
    if (!data) err = 'Error fetching salary'

    setTimeout(() => callback(err, data), 1000)
}

function checkEligibility(salary, callback) {
    console.log('Checking eligibility for:', salary)       // some realtime fetching
    const data = { eligible: true }

    let err;
    if (!data) err = 'Error validating eligibility'

    setTimeout(() => callback(err, data), 1000)
}

function displayResult(result) {
    console.log('Congratulations!', result)
}


// fire the process
const incomingValue = 'Alpha123'
// const incomingValue = null

startProcess(incomingValue, (err, id) => {
    if (err) {
        console.log(err)
        return;
    }
    fetchUser(id, (err, user) => {
        if (err) {
            console.log(err)
            return;
        }
        fetchPAN(user, (err, pan) => {
            if (err) {
                console.log(err)
                return;
            }
            fetchSalary(pan, (err, salary) => {
                if (err) {
                    console.log(err)
                    return;
                }
                checkEligibility(salary, (err, result) => {
                    if (err) {
                        console.log(err)
                        return;
                    }
                    displayResult(result)
                })
            })
        })
    })
})