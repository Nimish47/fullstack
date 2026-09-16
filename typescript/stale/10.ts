// Problem 10


function fn<T, K extends keyof T>(arr: T[], param: K) : T[K][]{
    return arr.map(item => item[param])
}


const products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Monitor", price: 25000 },
    { id: 3, name: "Keyboard", price: 3000 }
];


const result = fn(products, 'name')
console.log(result)