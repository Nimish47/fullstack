// callbacks when passed to sync functions are used for their "swappable" nature

// generic cook food fn
function cookFood(callback) {
    console.log('start cooking')
    callback()
    console.log('finish cooking')
}

cookFood(() => console.log('Cook chinese'))
// start cooking
// Cook chinese
// finish cooking

cookFood(() => console.log('Cook north indian'))
// start cooking
// Cook north indian
// finish cooking