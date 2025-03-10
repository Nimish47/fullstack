/**
 * JSON.Stringify(obj)
 *      - The JSON.stringify() method in JavaScript is used to convert JavaScript objects into a JSON string.
 *      - in complex words, we say serialize the object
 * JSON.Parse(JSONStr)
 *      - The JSON.Parse() method in JavaScript is used to convert JSON string back to a javascript object.
 *      - in complex words we say, de-serialize the object
 * 
 * DEEP CLONE WITH JSON.PARSE AND JSON.STRINGIFY
 * let copy_obj = JSON.parse(JSON.stringify(obj))
 * let copy_arr = JSON.parse(JSON.stringify(arr))
 * When cloning an object:
 *      - all object property value(s) are copied by value
 *      - hence, updating the copy object's property value won't modify original object
 * When cloning an array:
 *      - all array value(s) are copied by value
 *      - hence, updating the copy array's value(s) won't modify original object 
 */



const obj = { firstName: 'Amit', location: { lat: '303', long: '432' } }
const arr = [1, 'apple', { firstName: 'Amit', location: { lat: '100', long: '200' } }, [51, 21]]


let deepCloneObj = JSON.parse(JSON.stringify(obj))
deepCloneObj.firstName = 'harsh'
deepCloneObj.location.lat = '708'
console.log(deepCloneObj)                    // { firstName: 'harsh', location: { lat: '708', long: '432' } }
console.log(obj)                             // { firstName: 'Amit', location: { lat: '303', long: '432' } }   


let deepCloneArr = JSON.parse(JSON.stringify(arr))
deepCloneArr[0] = 9
deepCloneArr[1] = 'oranges'
deepCloneArr[2].firstName = 'Harsh'
deepCloneArr[2].location.lat = '900'
deepCloneArr[3][0] = '121'
console.log(deepCloneArr) // [9, 'oranges', { firstName: 'Harsh', location: { lat: '900', long: '200' } }, ['121', 21]]
console.log(arr)          // [1, 'apple', { firstName: 'Amit', location: { lat: '100', long: '200' } }, [51, 21]]

