// closure stores reference to scope, not global variable.
// good example
// remember priority example from closures


function test() {
  let flag = 10;
  return () => console.log(flag);
}
flag = 20;

test()();   // 10
