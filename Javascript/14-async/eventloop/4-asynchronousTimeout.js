// code flow
/**
 * cb, prepareFood, placeOrder, deliverOrder => all are declared and stored in HEAP
 *      CALL STACK EMPTY
 *      placeOrder function fires
 *      placeOrder function PUSHED to call stack and execution starts [Synchronous function so blocks code below]
 *      placeOrder function execution complete, POPPED from stack
 *      deliverOrder function fires
 *      prepareFood function PUSHED to call stack and execution starts
 *      oops its a setTimeout inside hence asynchronous function [non blocking code nature]
 *      Time A: cb (which is callback fn of setTimout) gets PUSHED in Browser Web API (timer API here)
 *      meanwhile placeOrder removed from stack
 *      console.log('See you soon! Guyzz') => PUSHED RETURN POPPED
 *      CALL STACK EMPTY
 *      after 2 seconds from Time A, cb function POPS from Web API and PUSHED to callback Queue
 *      if call stack is empty,cb function POPS from event queue and PUSHED to render Queue and ultimately
 *      PUSHED to call stack and execution starts
 *      once exection complete, cb function POPS from call stack
 *      CALL STACK EMPTY
 *         
 */

const cb = () => {
    console.log('The food is prepared!')
}

const prepareFood = () => {
    setTimeout(cb, 2000);
}

const placeOrder = () => {
    console.log('Order placed!')
}

const deliverOrder = (delay, cost) => {
    delay()
    console.log(`Food delivered, Cost was ${cost}`)
}


placeOrder()
deliverOrder(prepareFood, '$8.6')
console.log('See you soon! Guyzz')

// Order placed!
// Food delivered, Cost was $8.6
// The food is prepared!