// METHOD - forEach

// simply loop over each item of an array
// callback fn: perform certain task at the time of each iteration
// original array untouched
// arr.forEach((item, index)=>{....logic})

const arr = ["apple", "oranges", "grapes", "mangoes","watermelon"]
arr.forEach((data,index) => console.log(`${index} ${data}`))

/*
0 apple
1 oranges
2 grapes
3 mangoes
4 watermelon
*/
