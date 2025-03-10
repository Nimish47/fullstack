// Hell in promises
// Like callbacks, promises too have thier fair share of hell
// It arises when we need to trigger a series of promises in ORDER one after the other

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
    .then((_) => {
        cutVegetables()
            .then((_) => {
            cookFood()
                .then((_) => {
                serveFood()
                    .then((_) => {
                    cleanUtensils()
                        .then((_) => {
                            console.log('Party Over, bye!')
                    })
                })
            })
        })
    })

    // Food preparation started!
    // Buy groceries
    // Cut vegetables
    // Cook food
    // Serve food
    // Clean utensils
    // Party Over, bye!  