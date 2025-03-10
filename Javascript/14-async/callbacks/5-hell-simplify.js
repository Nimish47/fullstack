// Simplifying callback hell without using promises etc
// If you are adamant of not using promises or async/await, here is how simplyfy callback hell by distributing 
// each functionality in different functions. Still it looks complex!

const cleanUtensils = () => {
    setTimeout(() => {
        console.log('Clean utensils')
    }, 1000);
}

const serveFood = () => {
    setTimeout(() => {
        console.log('serve food')
        cleanUtensils()
    }, 1000);
}

const cookFood = () => {
    setTimeout(() => {
        console.log('Cook food')
        serveFood()
    }, 1000);
}

const cutVegetables = () => {
    setTimeout(() => {
        console.log('Cut vegetables')
        cookFood()
    }, 1000);
}

const buyGroceries = () => {
    setTimeout(() => {
        console.log('Buy groceries')
        cutVegetables()
    }, 1000);
}


const prepareFood = () => {
    console.log('starting to prepare food!')
    buyGroceries()
}

prepareFood()
// starting to prepare food!
// Buy groceries
// Cut vegetables
// Cook food
// serve food
// Clean utensils

