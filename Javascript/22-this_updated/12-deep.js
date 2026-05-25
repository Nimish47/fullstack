// what 'this' really is?
// this is tied to execution not something only related to a fn only
// but this with fns have certain rules - that need to be remembered!

// GEC
console.log('1', this)

// FEC
function norm() {
    console.log('2', this)
}

norm()

const obj = {
    fName: 'Nishant',
    printNorm: function () {
        console.log('3', this)          // NORM,FEC
    },
    printArr: () => {
        console.log('4', this)          // ARR,GEC
    }
}

obj.printNorm()
obj.printArr()

const randomObj = { country: 'IN' }
const randomFn = function () {
    console.log('5', this)              // NORM,FEC
}

randomFn.call(randomObj)