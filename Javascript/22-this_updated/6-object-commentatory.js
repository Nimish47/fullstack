// my aim is to make sure that "this" always and always points to object
// guidelines below to achieve that

const obj = {
    caseA: function() {console.log(this)},
    caseB: function() {return () => {console.log(this)}},
    caseC: function() {setTimeout(() => {console.log(this)}, 1000);},
}


// case: if fn = direct fn of object
// use a normal function
// this = obj
obj.caseA()                                     // {caseA: ƒ, caseB: ƒ, caseC: ƒ}


// case: if fn = inner fn of object 
// outer fn needs to be normal
// use arrow fn here 
// this = obj
obj.caseB()()                                   // {caseA: ƒ, caseB: ƒ, caseC: ƒ}


// case: if fn = timeouts in inner fn
// outer fn needs to be normal
// use arrow again
// this = obj
obj.caseC()                                     // {caseA: ƒ, caseB: ƒ, caseC: ƒ}

