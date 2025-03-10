// Create and use sync callback function from scratch
// party is the main function which takes two functions as parameters also called as callback functions
// Callback functions are called inside calling function to perform some task at some point in main fn
// Callback fns can be called with or without parameters
// Here main and callback fns all are synchrononous in nature

const cakeCallback = () => {
    console.log('Purchased any cheap flavour cake!')
}

const foodCallback = (cuisine) => {
    console.log(`Purchased ${cuisine} food!`)
}

const party = (buyCake, buyFood) => {
    console.log('Party started!')
    buyCake()
    buyFood('chinese')
    console.log('Party over!')
}

party(cakeCallback,foodCallback)
// Party started!
// Purchased any cheap flavour cake!
// Purchased chinese food!
// Party over!