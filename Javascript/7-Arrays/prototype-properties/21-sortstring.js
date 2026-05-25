// perfectly sort string array
// modifies original array

const arr = ["apple", "Papapya", "zebra", "Yana"]

arr.sort((a, b) => a.toLocaleUpperCase().localeCompare(b.toLocaleUpperCase()))
console.log('Asc sort', arr)            // Asc sort [ 'apple', 'Papapya', 'Yana', 'zebra' ]

arr.sort((a, b) => b.toLocaleUpperCase().localeCompare(a.toLocaleUpperCase()))
console.log('Desc sort', arr)           // Desc sort [ 'zebra', 'Yana', 'Papapya', 'apple' ]

// same logic to sort array of objects containing string as well

// a-b => asc sort => a.localeCompare(b)
// b-a => desc sort  => b.localeCompare(a)
