// for in loop with arrays

const obj = {
    id: 1,
    fName: 'Nishant',
    lName: 'Nimish',
    func: function(){console.log('Hola')}
}

// for (const item of obj) {
//     console.log(item)
// }

// TypeError: obj is not iterable

// to fetch keys
for (const item of Object.keys(obj)) {
    console.log(item)
}
// id
// fName
// lName
// func


// to fetch values
for (const item of Object.values(obj)) {
    console.log(item)
}
// 1
// Nishant
// Nimish
// [Function: func]

// to fetch key,value pair
for (const item of Object.entries(obj)) {
    console.log(item)
}
// [ 'id', 1 ]
// [ 'fName', 'Nishant' ]
// [ 'lName', 'Nimish' ]
// [ 'func', [Function: func] ]