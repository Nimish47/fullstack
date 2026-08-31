"use strict";
// problem 9
function extractDetails(students, type) {
    return students.map(item => item[type]);
}
// hard code data
const students = [
    { id: 1, name: "Rahul", department: "Engineering", salary: 90000 },
    { id: 2, name: "Priya", department: "Design", salary: 75000 },
    { id: 3, name: "Amit", department: "Engineering", salary: 105000 }
];
// consume
const resX = extractDetails(students, "salary");
// print
console.log(resX);
