// perfectly sort number array
// modifies original array

const arr = [11, 2, 99, 32, -15]

arr.sort((a, b) => a - b)
console.log('Asc sort', arr)            // Asc sort [ -15, 2, 11, 32, 99 ]

arr.sort((a, b) => b - a)
console.log('Desc sort', arr)           // Desc sort [ 99, 32, 11, 2, -15 ]


// same logic to sort array of objects containing numbers as well