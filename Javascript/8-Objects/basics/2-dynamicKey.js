/*
* DYNAMICALLY PICK KEY NAME FROM VARIABLE
* {[variableName: value]} 
* used when keyname of an object is dynamic based on result of a variable
* ex- variableName is calculated dynamically based on result of for example, a function  
* However, once object defined, changing variable won't update keyname further.
*/

const channelName = () => `Channel ${Math.round(Math.random() * 10)}`

let sports = channelName(); 
let obj = {name: 'Anshu', [sports]: 'ESPN'}

console.log(obj)        // { name: 'Anshu', 'Channel 6': 'ESPN' }
                        // { name: 'Anshu', 'Channel 2': 'ESPN' }
