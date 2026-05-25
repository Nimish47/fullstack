function main(token, callback) {
    console.log('Validating token')
    //validate token

    return new Promise((resolve, reject) => {
        if (token) return resolve(token)
        else return reject('invalid token')

        // console.log('popsicle 3d')
    })
}


function fetchUser(id) {
    console.log('Fetching user details for id', id)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({ fName: 'Karan', lName: 'Arora' })
        }, 1000);
    })
}

function fetchPAN(user) {
    console.log('Fetching pan details for user', user)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //return reject('Error fetching pan')
            return resolve({ number: '123435678' })
        }, 1000);
    })
}

function fetchSalary(pan) {
    console.log('Fetching salary details for pan', pan)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({ salary: '55000$' })
        }, 1000);
    })
}

function checkEligibility(salary) {
    console.log('Checking eligibility for salary', salary)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({ eligible: true })
        }, 1000);
    })
}


function display(message) {
    console.log(message)
}


async function processStart(TOKEN) {
    try {
        const id = await main(TOKEN)
        const user = await fetchUser(id)
        const pan = await fetchPAN(user)
        const salary = await fetchSalary(pan)
        const message = await checkEligibility(salary)
        display(message)
    } catch (error) {
        console.log(error)
    }
}

const TOKEN = 'alpha123'
processStart(TOKEN)