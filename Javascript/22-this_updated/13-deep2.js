function inner() {
    console.log('inner this', this)
}

function outer() {
    console.log('outer this', this)
    inner()
}

const obj = { id: 123, persona: 'Ultima' }


// outer this -> global obj
// inner this -> global obj
outer()

// outer this -> obj
// inner this -> global obj
outer.call(obj)