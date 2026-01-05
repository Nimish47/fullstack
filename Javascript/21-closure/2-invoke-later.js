// inner fn not executed immediately
// whether executed immediately or later doesn't matter
// points to reference


let appID = 'alpha-app' 

function country() {
    let cName = "India"
    // 2 closures for EC = printCountry
    // closure variables are reference based
    // As a result , appID value is updated one 
    function printCountry() {
        console.log('I did not forget you!!!',cName,appID)
    }
    return printCountry;
}

appID = 'gamma'

let fn = country()
fn()