// Explaining callback hell
// Notice how each setTimeout is nested inside other setTimeout (except first one)
// Each task is dependent whether previous task completed or not
// In corporate, if you use this way, readability will go in hell
// A better way is use of promises or async/await which you will see in next sections

const prepareFood = () => {
    console.log('starting to prepare food!')

    setTimeout(() => {
        console.log('Buy groceries')
        setTimeout(() => {
            console.log('Cut vegetables')
            setTimeout(() => {
                console.log('Cook food')
                setTimeout(() => {
                    console.log('serve food')
                    setTimeout(() => {
                        console.log('Clean utensils')
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

prepareFood()
// starting to prepare food!
// Buy groceries
// Cut vegetables
// Cook food
// serve food
// Clean utensils

