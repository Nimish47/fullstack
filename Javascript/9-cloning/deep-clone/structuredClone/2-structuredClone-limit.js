/**
 * STRUCTURED CLONE LIMITS
 *      - Functions can not be copied 
 *              - If you want to copy an object that contains a function,
 *                  the DataCloneError exception will be thrown.
 *      - DOM nodes can’t be copied
 *              - It also throws the DataCloneError when you attempt to clone DOM nodes..
 *      - Prototypes references lost
 *              -  Structured cloning doesn’t duplicate the prototype chain.
 *              -  If you copy an instance of a Class, the copied object will no longer be an instance of this Class.
 *              -  A plain object is returned in place of the original Class.
 */


const arr = [ { abc() { console.log('abc') } }]         

// const arr_copy = structuredClone(arr)
// DOMException [DataCloneError]: abc() { console.log('abc') } could not be cloned.


