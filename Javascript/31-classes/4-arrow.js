// arrow v/s normal in classes
// Instance methods => arrow pref
// prototype and static => normal


class Bank {
    constructor(bankName, balance) {
        this.bankName = bankName,
        this.balance = balance,
        this.getBankDetailsNorm = function () { console.log(`Name: ${this.bankName}`) }     // CASE1
        this.getBankDetailsArr = () => { console.log(`Name: ${this.bankName}`) }            // CASE1
    }

    getBalanceArr = () => { console.log(`balance: ${this.balance}`) }                       // CASE2
    getBalanceArr = function () { console.log(`balance: ${this.balance}`) }                 
}

// create instance
const sbi = new Bank('SBI', 17654)

// CASE1: Why arrow better over Normal ? (instance methods)
const cb1 = sbi.getBankDetailsNorm              // not fired immediately
const cb2 = sbi.getBankDetailsArr               // not fired immediately    

// "this" lost
cb1()                   // error
// "this" preserved
cb2()                   // Name: SBI


// CASE2: What happens when arrow method defined in prototype area?
// gets converted to instance (getBalanceArr)
console.log(Bank.prototype)                         // {}
console.log(sbi)                               
// Bank {bankName: 'SBI', balance: 17654, getBalanceArr: ƒ, getBankDetailsNorm: ƒ, getBankDetailsArr: ƒ}