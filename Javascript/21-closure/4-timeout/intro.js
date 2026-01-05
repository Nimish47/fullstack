// closure and timeouts

// Case 1
// Basic example
function fruitShop() {
    const fruitName = "Apple"

    setTimeout(function () {
        console.log(fruitName)
    }, 2000);
}

fruitShop() // Apple

// case2
// arrow fn
function animalShop() {
    const animalName = "Tiger"

    setTimeout(() => {
        console.log(animalName)
    }, 2000);
}

animalShop()    // Tiger

// case 3
// call by value v/s call by reference - normal fn
let flowerName = "Lily"
function flowerShop() {

    setTimeout(function () {
        console.log(flowerName)
    }, 2000);
}
flowerName = "Sunflower"
flowerShop()    // Sunflower

// case4
// call by value v/s call by reference - arrow fn
let plantName = "Neem"
function plantShop() {

    setTimeout(() => {
        console.log(plantName)
    }, 2000);
}
plantName = "Sheesham"
plantShop()     //Sheesham


