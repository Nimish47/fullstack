// can we skip constructor in Child class
// yes

// parent
class Company {
    constructor(companyName, founded) {
        this.companyName = companyName,
        this.founded = founded,
        this.companyDetails = () => { console.log(`Name: ${companyName}, Founded: ${founded}`) }
    }

    hiring() { console.log(`We are hiring at ${this.companyName}`) }
    static welcomeEmail() { console.log('Welcome to the company') }

}


// child 
// no constructor
class Employee extends Company {

    resign() {console.log(` An employee has resigned from ${this.companyName}`) }
    static goodbye() { console.log('Thanks, it was a nice ride!') }
}


// static
Employee.goodbye()                      // Thanks, it was a nice ride!
Employee.welcomeEmail()                 // Welcome to the company

// new Child
const nishant = new Employee('Google', 1998)

// debug instance 
console.log(nishant)            // Employee {companyName: 'Google', founded: 1998, companyDetails: ƒ}

// instance
nishant.companyDetails()                        // Name: Google, Founded: 1998

// prototype
nishant.hiring()                                // We are hiring at Google
nishant.resign()                                //  An employee has resigned from Google
