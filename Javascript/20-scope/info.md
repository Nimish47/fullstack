## when making videos
    1. go through all quiz questions of chatgpt


## observation
    1. Any variable (let/const/var) defined in GEC is available to all other ECs
    2. Understand lexical scope chain concept at :
        => definition time and 
        => execution time
        => timeout -> definition.js


## Each execution stack (whether global or fn based) has a private scope attached to it.
## Scope can be of three types
    1. Global 
        => by default attached to GEC (and passed to all further execution contexts)
        => all EC get access to it!
    2. Local 
        => where "var", "let", "const" and fns reside
        => can be for attached to any EC
    3. Closure
        => passed up from lexical scopes
        => can be attached to any EC
    4. Block 
        => for let/const , when inside a block (not fn)
        => can be attached to any EC
## commands
    node --inspect-brk basic.js
    chrome://inspect    
    CTRL + R => to refresh post adding breakpoints

## definition of closure
## A closure happens when: 
    => A function remembers the variables from its outer function, even after that outer function has finished executing.
