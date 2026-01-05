// Agenda: observe scope of var where it is accessible
// Agenda: Prove that var is hoisted and "undefined"
// case
    // "var" => within fn
    // "var" => globally 
// observe "var" scope (devtools) in each case
    // OBSERVE FUNCTION EC
    // OBSERVE GEC

// available in GEC - all other EC has access to it
// "var" is global scope here as defined in GEC
// [EC : GEC, scope: local] 
var appName = "Yolo App"

function appRun() {
    // this is only available in appRun EC
    // proves "var" fn scope if defined within fn
    // [EC : appRun, scope: local] 
    var appCommand = 'CTRL + S'
    console.log(appCommand)
}

console.log(appName)