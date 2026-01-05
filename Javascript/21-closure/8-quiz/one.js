// Interesting qustion
// verify in devtools
// Closure does a => [copy by value] OR [copy by reference] ???
// answer: reference


function country() {
    let cName = "India"

    function printCountry() {
        console.log('I did not forget you!!!', cName)
    }

    cName = "Australia"
    
    return printCountry;
}

country()()     // Australia