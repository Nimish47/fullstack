// observe behaviour of let/const/var in loops
// difficult to observe via devtools but keep in mind this concept


// GEC, local scope
// Same variable referenced for each iteration
for (var flag2 = 0; flag2 < 5; flag2++) {
    console.log(flag2)
}

// GEC, block scope
// different variable crated for each iteration but inaccessible like private variables
// once iteration is over (important concept, visualize in mind)
// difficult to debug right now
for (let flag1 = 0; flag1 < 5;flag1++) {
    console.log(flag1)
}
