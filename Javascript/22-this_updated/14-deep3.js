console.log('start')

function inner() {
}

function outer() {
    inner()
    const arr = () => {
        console.log(this)           // important
    }
    arr()
}

const obj = { id: 123, persona: 'Ultima' }

outer()
outer.call(obj)

console.log('end')