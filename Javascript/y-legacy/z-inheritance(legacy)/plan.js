// parent constructor

// works
Parent.isParent() // static method created
Papa.prototype.isHuman() // prototype method created
papa.isHuman()  // instance can access

Son.isSon() // static
Son.prototype.lovesSoccer() // prototype method created 
golu.lovesSoccer()  // instance can access

// would not work
Son.isParent()
    // checks direct - No
    // checks __proto chain - No
golu.isHuman()
    // checks direct - No
    // checks __proto chain - No 

// Trivia  
    // Son is an instance of Function
    // golu is an instance of Son

    // Son.__proto__.bind() works
    // golu.lovesSoccer() works

// how to do
    // Son can access both - isSon and isParent
    // golu can access both - lovesSoccer and isHuman 

// think
    // we need to modify __proto__  and .prototype of  Son  
    
    // if add in __proto
        // Son constructor can access Parent's static methods
        // Son's own props remain preserved, we only modify __proto
    
    // if we add .prototype.__proto
        // golu can access Parent's prototype methods
        // golu can access Son.prototype methods as usual
                // we only modifiy .prototype.__proto
                // we do not modify whole .prototype
        
// static inheritance
Son.__proto = Parent
// Son = 
    // own instance props(name,age) + 
    // own static props
    // __proto = Parent so
        // Parent's instance props (directly using .)
        // Parent static props (directly using .)

// Hence these work
    // Son.isSon() => direct
    // Son.isParent() => via Son.__proto.isParent()
    // Son.bind() => via Son.__proto.__proto__.bind()
    // Son.toString() => via Son.__proto.__proto.__.__proto__.bind()
    // Son.__proto.__proto.__.__proto__.__proto === null


// prototype inheritance
Son.prototype.__proto = Parent.prototype
// Son.prototype = 
    // own prototype methods (lovesSoccer)
    // __proto = Parent.prototype so
            // Parent's prototype methods

// hence these work
    // golu.lovesSoccer => via golu.__proto__.lovesSoccer
    // golu.isHuman => via golu.__proto__.__proto__.isHuman
    // golu.toString => golu.__proto__.__proto.__proto.toString()
    // golu.__proto__.__proto.__proto__.__proto__ === null