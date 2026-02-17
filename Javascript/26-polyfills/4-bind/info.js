// to understand rebinding step by step


Function.prototype.myBind = function (obj, ...params1) {
    const originalFn = this
    return function bounded(...params2) {
        return originalFn.apply(obj,[...params1, ...params2])
    }
}

const bound1 = print.bind(india)
const bound2 = bound1.bind(aus)
// bound1 -> function bounded(...params2) {return print.apply(india,[...params2])}
// bound2 -> function bounded2(...params3) {return bounded.apply(aus,[...params3])}

// bound2("hello") -> bounded2("hello") -> return bounded.apply(aus,"hello")
// bounded.apply(aus,"hello") -> bounded("hello") fired and this = aus

// inside bounded this is not used, hahaha
// means returns print.apply(india,""hello")



