// promise resolution of callback hell
// The underscore _ is just a throwaway parameter name =>
// a convention used when the argument isn’t needed.

const cleanUtensils = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Clean utensils')
            resolve()
        }, 1000)
    })
}

const serveFood = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Serve food')
            resolve()
        }, 1000)
    })
}

const cookFood = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Cook food')
            resolve()
        }, 1000)
    })
}

const cutVegetables = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Cut vegetables')
            resolve()
        }, 1000)
    })
}

const buyGroceries = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Buy groceries')
            resolve()
        }, 1000)
    })
}


console.log('Food preparation started!')
buyGroceries()
    .then((_) => cutVegetables())
    .then((_) => cookFood())
    .then((_) => serveFood())
    .then((_) => cleanUtensils())
    .then((_) => console.log('Party Over, bye!'))

// Food preparation started!
// Buy groceries
// Cut vegetables
// Cook food
// Serve food
// Clean utensils
// Party Over, bye!  