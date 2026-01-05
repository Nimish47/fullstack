// Agenda: observe scope of let/const where it is accessible
// block scope
// Agenda: Prove that let/const is hoisted  but inaccessibel as it is in TDZ
// case
// "let/const" => within blocks (discuss different blocks)
// "let/const" => globally
// observe "let/const" scope (devtools) in each case    
// observations
// new "block" scope unlocked


// global    
// [EC : GEC, scope: local] 
// "let,const" is available to all EC if defined in GEC
// hoisted but not accessible before   
const appName = "Yolo App"

// block 1
// [EC : GEC, scope: Block]
{
    let appEnvironment = "dev"
    console.log(appEnvironment)
}

// block 2
// [EC : GEC, scope: Block]
if (appName) {
    const appDuration = "100ms"
    console.log(appDuration)
}

// block 3
// [EC : appRun, scope: local]
function appRun() {
    const appId = '123$'
    if (appId) {
        const key = 'alpha1234'
        console.log(key)
    }
}

appRun()

