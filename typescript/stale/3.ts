// Question 3
// product filters


// type product
type Product = {
    id: number,
    name: string
    price: number,
    rating: number,
    category: string
}

// type filter
type Filter = {
    lowPrice?: number;
    highPrice?: number;
    category?: string;
    rating?: number;
    name?: string;
};

// create a products array
const productsArr: Product[] = [
    { id: 1, name: 'LG Monitor', price: 25000, rating: 3.9, category: 'Electronics' },
    { id: 2, name: 'Wakefit Sofa', price: 85000, rating: 4.4, category: 'Furniture' },
    { id: 3, name: 'Gap Jeans', price: 4000, rating: 5, category: 'Clothing' },
    { id: 4, name: 'Volkswagon Virtus', price: 2000000, rating: 5, category: 'Automobile' }
]

// filerProducts()
function filterProducts({ lowPrice, highPrice, category, rating, name }: Filter) {
    let resp = productsArr

    if (lowPrice !== undefined) resp = productsArr.filter((product) => product.price >= lowPrice)
    if (highPrice !== undefined) resp = resp.filter((product) => product.price <= highPrice)
    if (category) resp = resp.filter((product) => product.category === category)
    if (rating !== undefined) resp = resp.filter((product) => product.rating > rating)
    if (name) resp = resp.filter((product) => product.name === name)

    return resp;
}

// create diff filters
const filter1: Filter = { lowPrice: 80000, highPrice: 2100000 }
const filter2: Filter = { rating: 4, category: 'Clothing' }
// const filter3: Filter = {id: 12}    // TS won't allow

// consume
const result = filterProducts(filter1)

if (result.length === 0) console.log('no results found')

// no need for else
console.log(result.length, 'results found')