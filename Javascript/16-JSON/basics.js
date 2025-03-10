// A very basic intro with JSON - a very important built-in objects of Javascript
// we will study this in much more detail sometime later...

let stringJSON = '{"name": "Pankaj","age": "18"}'
console.log(JSON.parse(stringJSON))                 // { name: 'Pankaj', age: '18' }

let jsonObject = {"name": "Pankaj", "age": "18"}
console.log(JSON.stringify(jsonObject))             // '{"name":"Pankaj","age":"18"}'
