"use strict";
function useState(initialValue) {
    let state = initialValue; // important
    function setState(newValue) {
        state = newValue;
    }
    return [state, setState];
}
const [user, setUser] = useState(null);
console.log(user);
