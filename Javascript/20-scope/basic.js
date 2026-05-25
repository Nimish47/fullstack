// objects and this
// value of this inside an object's direct and nested functions
// object forms no scope

const obj = {
    caseA: function () { console.log(this) },
    caseB: () => { console.log(this) },
    caseC: function () { return function () { console.log(this) } },
    caseD: function () {
        console.log(this)           // ?
        return () => {      
            console.log(this)       // ?
        }
    }
}


obj.caseD()()                                               // // {caseA: ƒ, caseB: ƒ, caseC: ƒ, caseD: ƒ}

