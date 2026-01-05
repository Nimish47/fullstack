// Inside an object's method
    // calling one method property from another method property

// updated    
// explain how underneath binding happens at time of fn execution via "call" method

// obj.drink => this = obj (via "call")
// this.eat means => obj.eat()
// obj.eat => this = obj (again) (via call)

const obj = {
    fName: 'Alizeh',
    age: 18,
    eat: function () { console.log(`${this.fName} is eating food`) },
    drink: function () {
        this.eat()
        console.log(`${this.fName} is drinking beer`)
    }
}

obj.drink()

// Alizeh is eating food
// Alizeh is drinking beer