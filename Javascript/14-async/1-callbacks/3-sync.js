// create a basic myFilter from scratch
// cllbacks in sync fn used for swappable logic only
// we tried to create a async type version here - but of little use!

// flow
// myFilter -> display

function myFilter(inputArray, logicFn, callback) {
    const outputArray = inputArray.filter(logicFn)  // main logic

    let err
    if (!Array.isArray(outputArray)) err = 'Some error occured'

    callback(err, outputArray)
}

function display(result) {
    console.log(result)
}

const arr = ["apples", "bananas", "oranges", "apples", "papayas"]
const filterApples = (item) => item === "apples"


myFilter(arr, filterApples, (err, res) => {
    if (err) {
        console.log(err)
        return
    }
    display(res)
})
// [ 'apples', 'apples' ]