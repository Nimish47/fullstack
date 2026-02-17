// perform intro coding exercise using bind() function
// bind is best to explain Partial Application


// normal fn
const adder = (a, b, c) => console.log('add ', a + b + c)
adder(10,20,30)                                                      // add  60                                                   // curry add  60

// partial type1: a and b used up front (bind)
const partial1 = adder.bind(null,10,20)
partial1(30)                                                         // add  60  

// partial type2: b and c used together (bind)
const partial2 = adder.bind(null,10)
partial2(20,30)                                                      // add  60  

// partial type3: a,b,c called seperately (bind)
const cb = adder.bind(null,10)
const partial3 = cb.bind(null,20)
partial3(30)                                                         // add  60  

