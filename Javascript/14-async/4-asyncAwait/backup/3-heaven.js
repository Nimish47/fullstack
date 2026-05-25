// Heaven in Async/Await
// No hell via Async/Await! Only heaven
// Code is very readable and hence it becomes our favourite for handling async activities

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


const party = async () => {
    console.log('Food preparation started!')
    await buyGroceries()
    await cutVegetables()
    await cookFood()
    await serveFood()
    await cleanUtensils()       
    console.log('Party over, F off!')
}

party()

    // Food preparation started!
    // Buy groceries
    // Cut vegetables
    // Cook food
    // Serve food
    // Clean utensils
    // Party over, F off!