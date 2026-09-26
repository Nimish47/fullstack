"use strict";
function useRef(intialValue) {
    let val = intialValue; // important
    return {
        current: val
    };
}
// consume
const ref1 = useRef("banana");
console.log(ref1.current);
