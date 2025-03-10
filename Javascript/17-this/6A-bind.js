// this AND Bind
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
console.log(res1)            // Akki-18@JH-IN


// bind method - specify parameters instantaneously
const func2 = obj1.makeUsername.bind(obj2, 'KA','IN')  
const res3 = func2()
console.log(res3)           // Paki-24@KA-IN

// bind method - specify parameters while calling
const func1 = obj1.makeUsername.bind(obj2)
const res2 = func1('GJ','IN')  
console.log(res2)           // Paki-24@GJ-IN 
