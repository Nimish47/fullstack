// objects and this
// value of this inside an object's direct and nested functions
// object forms no scope

const obj = {
    caseA: function() {console.log(this)},
    caseB: () => {console.log(this)},
    caseC: function() {return function() {console.log(this)}},
    caseD: function() {return () => {console.log(this)}}
}

// case: object has normal fn
// this = obj
obj.caseA()                                                 // {caseA: ƒ, caseB: ƒ, caseC: ƒ, caseD: ƒ}


// case: object has arrow fn
// this = window
obj.caseB()                                                  // refers window


// case: object has outer normal - inner normal fn
// this = window
obj.caseC()()                                               // refers window


// case: object has outer normal - inner arrow fn
// this = obj
obj.caseD()()                                               // // {caseA: ƒ, caseB: ƒ, caseC: ƒ, caseD: ƒ}

