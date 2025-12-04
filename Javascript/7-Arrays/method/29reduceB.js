// using reduce find number of occurences of a item

const arr = ["apple", "oranges", "papaya", "grapes", "papaya", "apple", "oranges", "apple"]

const reducerFn = (acc,item) => {
    if(item in acc) acc[item] = acc[item] + 1
    else acc[item] = 1
    return acc
}

const result = arr.reduce(reducerFn, {})

console.log(result) //{ apple: 3, oranges: 2, papaya: 2, grapes: 1 }