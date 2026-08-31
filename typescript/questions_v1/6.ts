// problem 6


type Product = {
    id: number
    name: string
    price: number
}

type User = {
    id: number
    username: string
}

type Order = {
    id: number,
    orderDate: string
    orderedBy: string
}

type List<T> = {
    items: T[]
    page: number
    totalPages: number
}

// define generic function
function getLists<T>(response: List<T>): T[] {
    return response["items"]
}

// define responses
const productResponse = {
    items: [
        { id: 1, name: "Laptop", price: 80000 },
        { id: 2, name: "Monitor", price: 25000 }
    ],
    page: 1,
    totalPages: 5
};

const userResponse = {
    items: [
        { id: 101, username: "Rahul" },
        { id: 102, username: "Priya" }
    ],
    page: 1,
    totalPages: 3
};

// consume function
getLists(productResponse)
getLists(userResponse)