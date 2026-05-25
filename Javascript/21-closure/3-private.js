// private variable concept via closures
// encapsulation

const customer = () => {
    let custDetails = {
        name: '',
        balance: 0
    }

    // custDetails is accessible to these 3 fns because of closure
    const updateName = (custName) => {
        custDetails.name = custName 
    }    
    const updateBalance = (amount) => {
        custDetails.balance += amount
    }

    // debug this console line in devtools
    // seperate EC formed same name : getCustomerDetails
    // but they are different closures
    const getCustomerDetails = () => { 
        console.log(custDetails)
    }
    // now custDetails is gone after this "return" statement
    // only these fns are accessible
    return { updateName, updateBalance, getCustomerDetails }
}

// these two lines create different closure context's 
// they are independent of each other
// they create two different EC
// remember: if different EC / different scope => treated as independent variables => even if same name
const googleEmployee = customer()
const microsoftEmployee = customer()

googleEmployee.updateName('Aarav')
microsoftEmployee.updateName('Prakash')

googleEmployee.updateBalance(100000)
microsoftEmployee.updateBalance(80000)

googleEmployee.getCustomerDetails()     // { name: 'Aarav', balance: 100000 }
microsoftEmployee.getCustomerDetails()  // { name: 'Prakash', balance: 80000 }

// can't access directly, returns undefined
// since from customer fn we did not return custInfo
console.log('unable to access',googleEmployee.custDetails)