// non-primitive-type-variables passed into function parameters

// when param passed to function parameters, shallow copy occurs
// meaning if non-primitive vallues updated, they get updated in the
// original reference as well


// updating the param passed into function to see if original also modifies
const func = (obj) => {
    obj.name = 'Kunal'
    return obj;
}

const obj = {name: 'Aniket', age: 18}
const res = func(obj)

console.log(res)        //  { name: 'Kunal', age: 18 }  

// original modified!
console.log(obj)        //  { name: 'Kunal', age: 18 }