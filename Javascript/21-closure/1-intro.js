// Agenda: Basic Closure Intro
// Explain how printer has access to all (via devtools and scope: closure)
// here let/const/var don't matter
// explain via devtools debug
// explained in 20-scope -> 5-lex

// closure happens at function "definition" time (v.important)
// closure variables are reference based (v.important) and
// can be updated over time (based on let/const/var scope rules)
function country() {
    let cName = "India"
    function state() {
        let sName = "Jharkhand"
        // EC = printer
        // it has 2 closure scopes
        function printer() {
            console.log(cName, sName)
        }
        printer()
    }
    state()
}

country()