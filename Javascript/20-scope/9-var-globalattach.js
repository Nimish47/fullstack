// var and its issue with attached to "window"
// let const don't get attached
// run this in browser


// var - type 1
// gets attached to global object - "window" in browser
// attached to window only if declared in GEC
// won't get attached to globalThis (that's how it is)
var appName = "Yolo"

// var - type 2
// not attached to "window" as EC !== GEC
function myApp() {
    var appEnv = "dev"
}

// let
// let is not attached to "window"
let appID = '1234'

// const
// const is not attached to "window"
const appDuration = "100ms"

console.log('window (var1)', window.appName )
console.log('window (var2)', window.appEnv )
console.log('window (let)', window.appID )
console.log('window (const)', window.appDuration )