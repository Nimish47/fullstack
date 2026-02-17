// concatenate mupltiple objects
// spread op best


// create two objects
const obj1 = { personA: 'Arvainda', stateA: 'Tamil Nadu', addr1: { lat: '123', long: 'ABC' } }
const obj2 = { personB: 'Pulkit', stateB: 'Haryana', addr2: { lat: '456', long: 'XYZ' } }

// CASE: concatenate
// spread op
const result = { ...obj1, ...obj2 }
console.log(result)
// {
//   personA: 'Arvainda',
//   stateA: 'Tamil Nadu',
//   addr1: { lat: '123', long: 'ABC' },
//   personB: 'Pulkit',
//   stateB: 'Haryana',
//   addr2: { lat: '456', long: 'XYZ' }
// }


// CASE: shallow copy - beware
result.addr1.lat = '456'
console.log(obj1)
// {
//   personA: 'Arvainda',
//   stateA: 'Tamil Nadu',
//   addr1: { lat: '456', long: 'ABC' }
// }