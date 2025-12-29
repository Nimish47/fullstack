// primitive-type-variables passed into function parameters

// when param passed to function parameters, shallow copy occurs
// but since its primitive variables, original remains unaltered


// updating the param passed into function to see if original also modifies
const func = (num) => {
    num = 10;
    return num;
}

const num = 5;
const res = func(num)

console.log(res)        // 10 

// original preserved
console.log(num)        // 5