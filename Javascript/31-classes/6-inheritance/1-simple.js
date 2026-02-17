// Inheritance with classes and introduction of Child classes


// CASE: create parent class
class Company {
    constructor(companyName, founded) {
        this.companyName = companyName,
        this.founded = founded,
        this.companyDetails = () => { console.log(`Name: ${companyName}, Founded: ${founded}`) }
    }

    hiring() { console.log(`We are hiring at ${this.companyName}`) }
    static welcomeEmail() { console.log('Welcome to the company') }

}


// CASE: create child class
// "extends" => *2
// super in constructor => *1 
class Employee extends Company {
    constructor(employeeName, ...args) {
        super(...args),                             // rest operator, smart way (use at last)
        this.employeeName = employeeName,
        this.employeeDetails = () => { console.log(`Name: ${this.employeeName} Company: ${this.companyName}`) }
    }

    resign() {console.log(`${this.employeeName} has sbmitted his resignation`) }
    static goodbye() { console.log('Thanks, it was a nice ride!') }
}


// CASE: Child access static => 'Own' and Parent ? Yes
Employee.goodbye()                      // Thanks, it was a nice ride!
Employee.welcomeEmail()                 // Welcome to the company

// new Child
const nishant = new Employee('Nishant Nimish', 'Google', 1998)

// CASE: child instance structure same as parent - yes
console.log(nishant)
// Employee {companyName: 'Google', founded: 1998, employeeName: 'Nishant Nimish', companyDetails: ƒ, employeeDetails: ƒ}


// CASE: child access instance - own and parent - yess
nishant.companyDetails()                        // Name: Google, Founded: 1998
nishant.employeeDetails()                       // Name: Nishant Nimish Company: Google


// CASE: child access prototype - own and parent - yess
nishant.hiring()                                // We are hiring at Google
nishant.resign()                                // Nishant Nimish has sbmitted his resignation


// CASE: cross-verify inheritance
console.log(Object.is(Employee.__proto__, Company))                                 // true
console.log(Object.is(Employee.prototype.__proto__, Company.prototype))             // true