// PRIMITIVE DATATYPE - NUMBER()

// numbers can be declared in two ways - typeA  AND typeB
// typeB returns a number object and type A a primitive number
// consolling type B shows certain methods we can apply on number like toString() etc..
// however all methods that type B has access to can be applied to type A too
// behind the scenes - type A also gets access to methods that type B has
// hence, no major difference. We can use anyone

const num1 = 23                 // type A
const num2 = new Number(46)     // type B

console.log(num1)               // 23
console.log(num2)               // [Number: 46]
