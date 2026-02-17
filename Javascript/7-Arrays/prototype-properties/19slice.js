// METHOD - slice

// used to slice a part of an array and store in a new array
// arr.slice(startindex:optional,endindex:optional)
// if startindexindex and endindex not specified, whole array returned
// if endindex not specified, endindex = length of array
// cutting occurs - [startindex,endindex)
// original array untouched
// returns a new sliced array

const arr = ["cricket","golf","tennis","polo","squash"]

console.log(arr.slice())            // [ 'cricket', 'golf', 'tennis', 'polo', 'squash' ]
console.log(arr.slice(1))           // [ 'golf', 'tennis', 'polo', 'squash' ]
console.log(arr.slice(1,3))         // [ 'golf', 'tennis' ]