// two different closures are formed
// both are independent
// this concept covered in 3-private.js

function calculator() {
    let counter = 0
    function increment() {
        counter++;
    }
    function getCounter() {
        console.log(counter)
    }
    return { increment, getCounter };
}

let cashier1 = calculator()
let cashier2 = calculator()

cashier1.increment()
cashier2.increment()

// both independent, hence return 1 each
cashier1.getCounter()       //1
cashier2.getCounter()       //1