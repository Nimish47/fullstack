// problem 9

// fn 
// param 1 => array of products
// callback => operates on array of products
// output => array of something


// type callback<T,R> = (value: T[]) => R[];

function extractNames<T extends { name: string }>(list: T[]) {
    return list.map(item => item.name)
}

function calculatePrice<T extends { price: number }>(list: T[]) {
    return list.map(item => item.price * 2)
}

// R = very important
// because R can be anything
function fn<T,R>(list: T[], cb: (value: T[]) => R[]) {
    return cb(list)
}

const products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Monitor", price: 25000 },
    { id: 3, name: "Keyboard", price: 3000 }
];

const result = fn(products, extractNames)
console.log(result)

