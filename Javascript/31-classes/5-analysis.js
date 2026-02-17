// analyze Class constructor and it's instance

class Bank {
    constructor(bankName, balance) {
            this.bankName = bankName,
            this.balance = balance
    }

    getBalance() { console.log(`balance: ${this.balance}`) }
}


// CASE: analyze Class.__proto__
// internally, classes are functions underneath, but without [[Call]]
console.log(Bank.__proto__)                                         // Function.prototype

// CASE: analyze Class.prototype
console.log(Bank.prototype)          // {getBalance: ƒ}

// CASE: new + analyze instance.__proto__
const pnb = new Bank('PNB', 20234)
console.log(pnb.__proto__)          // {getBalance: ƒ}


