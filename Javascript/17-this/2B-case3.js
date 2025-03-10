// Inside an object's method
    // calling one method property from another method property


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