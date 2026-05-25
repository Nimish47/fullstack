// pure inheritance with only function constructors (no classes, no sugar)

// Info
// perfect inheritance =  instance inheritance + prototype inheritance + static inheritance
// instance => arrow / normal
// prototype/static => normal

// THE 6 STAGES OF INHERITANCE BELOW


// STAGE 1: CREATE function constructors parent
function Parent(company, founded) {
        this.company = company,
        this.founded = founded,
        this.getCompanyDetails = function () { console.log(`Company: ${this.company} and Founded :${this.founded}`) }
}

// add static parent
Parent.isParent = function () { console.log('I am a parent level utility') }

// add prototype parent
Parent.prototype.greetAll = function () { console.log(`Amigos everyone!' ${this.company} family '!!!!'`) }

// STAGE 2: CREATE function constructors child + instance inheritance
function Child(company, founded, data) {
    Parent.call(this, company, founded)                 // instance inheritance
    this.employeeData = data
    this.getEmployeeDetails = function () { console.log(`Name: ${this.employeeData.name}, Works: ${this.company}, Founded: ${this.founded}`) }
}

// add static child
Child.isChild = function () { console.log('I am a child level utility') }

// add prototype child
Child.prototype.greetLabourers = function () { console.log('Greeting labourer:', this.employeeData.name) }

// STAGE 3: CODE inheritance - logic here

// static inheritance 
// Idea: Child.__proto__ = Parent
Object.setPrototypeOf(Child, Parent)

// prototype inheritance
// Idea: Child.prototype.__proto__ = Parent.prototype
Object.setPrototypeOf(Child.prototype, Parent.prototype)

// STAGE 4: POST inheritance ops

// Debug Child.__proto__
console.log(Child.__proto__)                                // refers Parent        

// Debug Child.prototype.__proto__
console.log(Child.prototype.__proto__)                      // refers Parent.prototype

// child constructor access own static
Child.isChild()                                             // I am a child level utility

// child constructor access parent static
Child.isParent()                                            // I am a parent level utility

// child instance
const googleEmployee = new Child('google', '1998', { name: 'Nishant Nimish', gender: 'male' })

// structure inherited from parent - yes
console.log(googleEmployee) 
// Child {company: 'google', founded: '1998', employeeData: {…}, getCompanyDetails: ƒ, getEmployeeDetails: ƒ}

// child instance can access own instance props
googleEmployee.getEmployeeDetails()

// child instance can access inherited instance props
googleEmployee.getCompanyDetails()                      // Name: Nishant Nimish, Works: google, Founded: 1998

// debug childinstance.__proto__
console.log(googleEmployee.__proto__)                   // refers Child.prototype

// child instance can access own prototype props
googleEmployee.greetLabourers()                         // Greeting labourer: Nishant Nimish

// child instance can access Parent.prototype
googleEmployee.greetAll()                               // Amigos everyone!' google family '!!!!'


// STAGE: 5 : UPDATING Parent

// add static utlities to Parent
Parent.farewellCompany = function() {console.log(`Company is shutting down!! See for yourself!!! Hahahaha`)}

// add prototoype properties to Parent
Parent.prototype.farewellEmployee = function() {console.log(`So long labourer ${this.employeeData.name}, Good Bye!!!`)}


// STAGE: 6 : VERIFY inheritence - real time
// can Child and child access newly upated props? Yes
// hence proved inheritance is real time and reference based!!!!

Child.farewellCompany()                 // Company is shutting down!! See for yourself!!! Hahahaha
googleEmployee.farewellEmployee()       // So long labourer Nishant Nimish, Good Bye!!!


