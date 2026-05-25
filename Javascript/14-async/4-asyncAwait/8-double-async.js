// this structure i saw in amex gbt project
// main function is async 
// validateUser fn is also async
// question: why we need await with validateUser
// answer : the return value of validateUser() will be a <pending-promise> if await not used
// corporate example


async function validateUser(id) {
    if (!id) throw new Error("Invalid Id");

    console.log('Fetching age')
    const age = await new Promise((resolve) => { setTimeout(() => resolve(23), 2000) })

    console.log('Checking eligibility')
    const resp = await new Promise((resolve) => { setTimeout(() => resolve({ eligible: age >= 18 }), 2000) })

    return resp.eligible
}

async function startProcess(id) {
    try {
        const response = await validateUser(id)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

// trigger start fn
startProcess(234)