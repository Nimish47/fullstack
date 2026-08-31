
// problem 8
type Employee = {
    id: number,
    name: string,
    department: string,
    salary: number
}

// extractName()
function extractNames(arr: Employee[]) {
    return arr.map(item => item.name)
}

// calculateSalary()
function calculateSalary(arr: Employee[]) {
    return arr.map(item => item.salary + item.salary * 0.1)
}

// transformer()
function transformer<K>(list: Employee[], cb: (list: Employee[]) => K[]) {
    return cb(list)
}

// hard code employee data
const employees = [
    { id: 1, name: "Rahul", department: "Engineering", salary: 90000 },
    { id: 2, name: "Priya", department: "Design", salary: 75000 },
    { id: 3, name: "Amit", department: "Engineering", salary: 105000 }
]


// consume
const respX = transformer(employees, extractNames)
const respY = transformer(employees, calculateSalary)

// print
console.log(respX)
console.log(respY)