// private props in classes


// RUN IN NODE NOT CHROME
// Node.js console.log: Hides private fields #balance (treats them as truly private)
// Browser DevTools: Shows private fields for debugging purposes

// CASE:  private feild
// access from all methods in class
// can it be accessed from outside? No


class Bank {
    #balance = 0                    // private property

    constructor(branchName, branchId, initialBalance) {
            this.branchName = branchName,
            this.branchId = branchId,
            this.#balance = initialBalance              // access private from contructor
    }

    #getBalance() { console.log(`Your balance is: ${this.#balance}`) }          // private method

    // access private from prototype
    updateBalance(amount) { this.#balance += amount }
    viewBalance(user) { if (user === 'admin') this.#getBalance() }
}

// create instance
const sbi = new Bank('SBI', 17470, 120)

// debug instance
// private props not visible
console.log(sbi)                // Bank { branchName: 'SBI', branchId: 17470 }

// access methods
sbi.updateBalance(1000)
sbi.viewBalance()

// direct access to private feild/method not allowed
// console.log(sbi.balance)            // undefined
// sbi.getBalance()                 // error