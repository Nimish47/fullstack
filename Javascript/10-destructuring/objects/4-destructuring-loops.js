/**
 * DESTRUCTURING OBJECTS IN LOOP
 * same logic as before
 * instead of accessing full object at each iteration, access only reqd. properties of 
 * object at each iteration/
 */


let arr = [
    {
        firstName: "Ankesh",
        age: 18
    },
    {
        firstName: "Nishant",
        age: 28
    },
    {
        firstName: "Ajinkya",
        age: 38
    }
]

arr.forEach(({ firstName }) => { console.log(`My name is ${firstName}`) })
/*
My name is Ankesh
My name is Nishant
My name is Ajinkya
*/