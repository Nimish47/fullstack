// creating objects - the literal way (best)


// CASE: create an object using {}
const obj = {
    id: '123',
    fName: 'Nishant Nimish',
    normFn: function () { return `${this.fName} from normal fn` },
    arrowFn: () => { return `${this.fName} from arrow fn` }
}

// print object
console.log(obj)                // { id: '123', fName: 'Nishant Nimish' }

// normal fn
// this decided at call time
console.log(obj.normFn())       // Nishant Nimish from normal fn

// arrow fn
// this decided at definition time
// object forms no scope - 'this' lost
console.log(obj.arrowFn())      // undefined from arrow fn

// analyze __proto__
console.log(obj.__proto__)      // Same as Object.prototype