// break works


const arr = ['apple', 'oranges', 'papaya']

for (const key in arr) {
    if (arr[key] === "oranges") break;
    console.log(key, ':', arr[key])
}

// 0: apple
