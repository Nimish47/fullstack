// "this" value in standalone fns

// case: this inside a standalone normal fn
function a1() {console.log(this)}               // refers window in browser
a1()

// case: this inside a standalone arrow fn
const a2 = () => {console.log(this)}           // refers window in browser
a2()