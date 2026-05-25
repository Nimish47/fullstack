function fetchUser(callback) {
    console.log('Fetching user details')
    callback(null)
}

function fetchPAN(callback) {
    console.log('Fetching PAN records')
    callback(null)
}

function fetchSalary(callback) {
    console.log('Fetching user salary')
    callback(null)
}

function cardEligible(callback) {
    console.log('Validating card eligibility')
    callback(null)
}

function display() {
    console.log('User is card eligible')
}


// fire start function
fetchUser((err) => {
    if (err) {
        console.log(err)
        return;
    }

    fetchPAN((err) => {
        if (err) {
            console.log(err)
            return;
        }
        fetchSalary((err) => {
            if (err) {
                console.log(err)
                return;
            }
            cardEligible((err) => {
                if (err) {
                    console.log(err)
                    return;
                }
                display()
            })
        })
    })
})

// Fetching user details
// Fetching PAN records
// Fetching user salary
// Validating card eligibility
// User is card eligible