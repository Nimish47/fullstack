"use strict";
// extractName()
function extractNames(arr) {
    return arr.map(item => item.name);
}
// calculateSalary()
function calculateSalary(arr) {
    return arr.map(item => item.salary + item.salary * 0.1);
}
// transformer()
function transformer(list, cb) {
    return cb(list);
}
// hard code employee data
const employees = [
    { id: 1, name: "Rahul", department: "Engineering", salary: 90000 },
    { id: 2, name: "Priya", department: "Design", salary: 75000 },
    { id: 3, name: "Amit", department: "Engineering", salary: 105000 }
];
// consume
const respX = transformer(employees, extractNames);
const respY = transformer(employees, calculateSalary);
// print
console.log(respX);
console.log(respY);
