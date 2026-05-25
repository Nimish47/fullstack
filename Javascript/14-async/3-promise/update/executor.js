// proof that executor runs synchronously

const obj = new Promise((res, rej) => {
    console.log('start')
    setTimeout(res, 0);
    console.log('end')
})

obj
    .then(() => console.log('Operation success'))
    .catch(err => console.log(err))

// start
// end
// Operation success