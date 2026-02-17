// creating anonymous functions

// a simple function
function queue(cb1, cb2) {
    console.log('start')
    cb1()
    cb2()
    console.log('done')
}

// CASE: normal and arrow anonymous fns
queue(
    function () { console.log('CB1') },
    () => { console.log('CB2') }
)

// start
// CB1
// CB2
// done