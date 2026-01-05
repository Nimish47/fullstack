// Understanding lex priority with two cases
// how js looks up the scope chain and closes over the best possible one
// very very important example

// scenario #1
// two flag's => one in GEC and other in test EC
// logger needs to choose
// it can access both
// name is same => so needs to prioritize => chooses nearest one => test EC
function test() {
    let flag = 10;
    return function logger() {
        console.log(flag);
    }
}

var flag = 20;

test()(); // 10

// scenario #2
// we remove "flag" from "test2 EC"
// JS is smart, can't find flag in test2 scope, so moves to Global scope and Closures over it

function test2() {
    // let flag = 10;
    return function logger() {
        console.log(flag);
    }
}

var flag = 20;

test2()();  // 20