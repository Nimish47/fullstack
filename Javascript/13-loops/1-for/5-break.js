// break works

const arr = ["apple", "oranges", "banana"]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "oranges") break;
    console.log(arr[i]);
}

// apple
// oranges
// banana