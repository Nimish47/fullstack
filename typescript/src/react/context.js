"use strict";
function createContext(initialValue) {
    let val = initialValue; // important
    return {
        value: val
    };
}
function useContext(context) {
    return context.value;
}
const themeContext = createContext("black");
const response = useContext(themeContext);
console.log(response);
