// for in loop with arrays

const obj = {
    id: 1,
    fName: 'Nishant',
    lName: 'Nimish',
    func: function(){console.log('Hola')}
}

for (const key in obj) {
    console.log(key,':',obj[key])
}

// id : 1
// fName : Nishant
// lName : Nimish
// func : [Function: func]