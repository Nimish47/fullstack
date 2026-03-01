// Different contexts of super
// how to call parent's methods from child's methods
// constructor to constructor call
// prototype to protype call
// static to static call


// create parent class
class Company {
    constructor(companyName, founded) {
        this.companyName = companyName,
        this.founded = founded,
        this.companyDetails = () => { console.log(`Name: ${companyName}, Founded: ${founded}`) }
    }

    exitProcess() { console.log(`Kindly start offboarding process of employee ${this.employeeName}`) }
    static onBoarding() { console.log('Please start the onboarding process of new employees') }

}


// create child class -  Below scenarios covered
// CASE1: Parent constructor call from Child - super
// CASE2: Parent.prototype props access from Child prototype methods
// CASE3: Parent static methods access from Child static methods

class Employee extends Company {
    // super will refer Company constructor
    constructor(employeeName, ...args) {
        super(...args),                             // CASE1
        this.employeeName = employeeName
    }

    // super will refer Company prototype
    resign() {
        console.log(`${this.employeeName} has sbmitted his resignation`) 
        super.exitProcess()                         // CASE2
        // this.exitProcess() // this will work too, think!
    }

    // super will refer Company static
    static hello() { 
        console.log('Heppy to join the company!')
        super.onBoarding()                           // CASE3
     }
}


// static
Employee.hello()
// Heppy to join the company!
// Please start the onboarding process of new employees

// new
const pushpam = new Employee("Pushpam", "Wipro", 1994)

// prototype
pushpam.resign()
// Pushpam has sbmitted his resignation
// Kindly start offboarding process of employee Pushpam