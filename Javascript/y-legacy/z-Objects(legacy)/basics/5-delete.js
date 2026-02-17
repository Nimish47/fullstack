/*
KEYWORD - delete
delete keyname
used to delete a (key-value) pair of an object
removes k-v pair permanently (from the memory)
only one pair can be deleted at a time
modifies original object
*/


let simpleObj = { city: "Kolhapur", state: "Maharashtra", pin: [101, 201, 301] }

let complexObj = {
    city: "Kolhapur",
    state: "Maharashtra",
    location: { district: { name: 'patia' } }
}

delete simpleObj.state
console.log(simpleObj)      // { city: 'Kolhapur', pin: [ 101, 201, 301 ] }

delete complexObj.state
console.log(complexObj)     // { city: 'Kolhapur', location: { district: { name: 'patia' } } }

