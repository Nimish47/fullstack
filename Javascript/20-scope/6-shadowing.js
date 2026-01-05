// Agenda: discuss shadowing base and priority rules
// rules of shadowing
  // depends on EC and scope
// if variables are in different ECs / different SCOPEs
  // re-declaration/update values all allowed
  // treated as different variables (even if name as same)

// if variables are in same ECs AND same SCOPEs  
  // first defined varaible rules apply
  // if it was let => redeclaration NO, update values YES
  // if it was const => redeclaration NO, update values NO
  // if it was var => redeclaration YES, update values YES

// Priority rules
  // if same name varibales available via closure, priority given to 
  // closure of closest EC.


// valid shadow - 1
// 1st a = [GEC, local]
// 2nd a = [GEC,Block]
// both are in diff scopes, even though EC is same
// If in diff scopes, means are independent variables (even though name same)
// Scopes are like diff buckets
// ECs are like different bathrooms
let a = 10;
{
  let a = 20;
  console.log('shadow1', a);  //20
}
console.log('shadow 1', a); //10

// valid shadow - 2
// 1st x = [GEC, local]
// 2nd x = [test,local]
// different EC's, no issues, treated as independent
let x = 10;
function test() {
  let x = 20;
  console.log('shadow 2', x); // 20
}
test();
console.log('shadow 2', x); // 10

// valid shadow - 3
// 1st b = [GEC, local]
// 2nd b = [GEC, Block]
// same EC but different scopes => diff buckets => treated as independent
var b = 10;
{
  let b = 20;
}
console.log('shadow 3', b) //10

// invalid shadow - 4
// 1st flag => [GEC,local]
// 2nd flag => [GEC, local] (because it's var ,hahaha)
// now same EC and same bucket - check 1st type => it's let
// let redeclaration not allowed so error thrown
// however if first "flag" was "var" => allowed since "var" allows redeclaration
let flag = 5;

if (true) {
  var flag = 10;
}

console.log('shadow 4',flag);

// valid shadow - 5
// see 4 case scenario for explanation
var counter = 5;

if (true) {
  var counter = 10;
}

console.log('shadow 5',counter);  //10

// priority
// Inner EC has access to 2 closures => [Outer EC, GEC]
// ClOSURE THAT HAS NEAREST LEXICAL SCOPE GETS HIGHER PREFERENCE

let v = 1;

function outer() {
  let v = 2;
  function inner() {
    console.log('priority',v);
  }
  inner();
}

outer(); //2


