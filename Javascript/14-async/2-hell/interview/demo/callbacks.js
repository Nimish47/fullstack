// talk about callback signature
// handling errors
// pyramid of doom

// token =>
// main-id-> (sync)
// fetchUser-user-> (async)
// fetchPAN-pan-> fetchSalary-salary-> checkEligibility-result-> display

// official signature
// callback(err,data)
// good -> callback(null,data)
// bad -> callback(err,null)

// sync
function main(token, callback) {
    console.log('Validating token')
    //validate token
    if (token) callback(null, token)
    else callback('invalid token', null)
}

function fetchUser(id, callback) {
    console.log('Fetching user details for id', id)

    // mock async task to fetch user
    setTimeout(() => {
        callback(null, { fName: 'Karan', lName: 'Arora' })
    }, 1000);
}

function fetchPAN(user, callback) {
    console.log('Fetching pan details for user', user)

    // mock async task to fetch pan details
    setTimeout(() => {
        // callback(null, { number: '123435678' })
        callback ('some error occured while fetching pan details', null)
    }, 1000);
}

function fetchSalary(pan, callback) {
    console.log('Fetching salary details for pan', pan)

    // mock async task to fetch salary details
    setTimeout(() => {
        callback(null, { salary: '55000$' })
    }, 1000);
}

function checkEligibility(salary, callback) {
    console.log('Checking eligibility for salary', salary)

    // mock async task to check eligibility
    setTimeout(() => {
        callback(null, { eligible: true })
    }, 1000);
}

// sync
function display(message) {
    // print
    console.log(message)
}


const TOKEN = 'alpha123'

main(TOKEN, (err, id) => {
    if (err) {
        console.log(err)
        return
    }
    fetchUser(id, (err, user) => {
        if (err) {
            console.log(err)
            return
        }
        fetchPAN(user, (err, pan) => {
            if (err) {
                console.log(err)
                return
            }
            fetchSalary(pan, (err, salary) => {
                if (err) {
                    console.log(err)
                    return
                }
                checkEligibility(salary, (err, message) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    display(message)
                })
            })
        })
    })
})