// Create and use async callback function from scratch
// same as previous except
// Here main and callback fns all are asynchrounous in nature hence non-blocking
// last console printed first then both timeout functions moved to stack from event queue

const cakeCallback = () => {
    setTimeout(() => {
        console.log('Purchased any cheap flavour cake!')
    }, 1000);
}

const foodCallback = (cuisine) => {
    setTimeout(() => {
        console.log(`Purchased ${cuisine} food!`)
    }, 1000);
}

const party = (buyCake, buyFood) => {
    console.log('Party started!')
    buyCake()
    buyFood('chinese')
    console.log('Party over!')
}

party(cakeCallback, foodCallback)
// Party started!
// Party over!
// Purchased any cheap flavour cake!
// Purchased chinese food!