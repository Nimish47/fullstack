// this AND Apply
// a javascript method that manipulates what object 'this' refers to.

const obj1 = {
    firstname: 'Akki',
    age: 18,
    makeUsername: function (code1, code2) {
        return `${this.firstname}-${this.age}@${code1}-${code2}`
    }
}

const obj2 = {
    firstname: 'Paki',
    age: 24
}

const res1 = obj1.makeUsername('JH', 'IN')
console.log(res1)       // Akki-18@JH-IN

// apply method
const res2 = obj1.makeUsername.apply(obj2, ['IN', 'GJ'])
console.log(res2)       // Paki-24@IN-GJ
