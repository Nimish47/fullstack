// in interviews, explain partial app via bind() only
// this way is good but it is not pure Partial app
// since calling style is altered

// explain partial application v/s currying via a simple add fn that takes 3 arguments

// normal fn
const adder = (a, b, c) => console.log('normal add ', a + b + c)
adder(10,20,30)                                                             // normal add  60


// curry
const curryAdd = a => b => c => console.log('curry add ',a+b+c)
curryAdd(10)(20)(30)                                                        // curry add  60

// partial type1: a and b used up front
const partial1 = (a,b) => c => console.log('partial 1 add ',a+b+c)
partial1(10,20)(30)                                                         // partial 1 add  60

// partial type2: b and c used together
const partial2 = a => (b,c) => console.log('partial 2 add ',a+b+c)
partial2(10)(20,30)                                                         // partial 2 add  60

// partial type3: a,b,c called seperately
// currying is a "type" of partial application
const partial3 = a => b => c => console.log('partial 3 add ',a+b+c)
partial3(10)(20)(30)                                                        // partial 3 add  60