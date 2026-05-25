// Lex Intro
// explain how printer has access to all - via debugging
// this is also a very good example of closure
// printer EC has access to 3 Closure scope's
    // GEC => appID
    // country EC => cName
    // state EC => sName
// js smart to know which data to inherit in closure    


const appID = '1234$'   // passed to printer EC via closure
const dummy = 'unused'  // not passed via closure as not used
 
function country() {
    
    let cName = "India"  // passed to printer EC via closure
    return function state() {
        let sName = "Jharkhand"     // passed to printer EC via closure
        return function printer() {
            console.log(appID, cName, sName)
        }
    }
}


country()()()