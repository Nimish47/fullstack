function Parent(name,age){
    this.name = name,
    this.age = age    
}
// undefined

Parent.prototype
// {}constructor: ƒ Parent(name,age)[[Prototype]]: Object

Parent.__proto__
// ƒ () { [native code] }

Parent.isParent = function() {console.log('I am parent exclusive static utility')}
// ƒ () {console.log('I am parent exclusive static utility')}

Parent.prototype.isHuman = function(){console.log(`${this.name} is human afterall`)}
// ƒ (){console.log(`${this.name} is human afterall`)}

Parent.prototype
// {isHuman: ƒ}isHuman: ƒ ()constructor: ƒ Parent(name,age)[[Prototype]]: Object

Parent.__proto__
// ƒ () { [native code] }

const papa = new Parent('Rashmi Narayan', 58)
// undefined

papa
// Parent {name: 'Rashmi Narayan', age: 58}age: 58name: "Rashmi Narayan"[[Prototype]]: ObjectisHuman: ƒ ()constructor: ƒ Parent(name,age)[[Prototype]]: Object

function Son(name,age){
    this.name = name,
    this.age = age  
}
// undefined

Son.prototype
// {}constructor: ƒ Son(name,age)[[Prototype]]: Object

Son.__proto__
// ƒ () { [native code] }

Son.isSon = function() {console.log('I am son exclusive utility')} 
// ƒ () {console.log('I am son exclusive utility')}

Son.prototype.lovesSoccer = function(){console.log(`${this.name} loves soccer`)}
// ƒ (){console.log(`${this.name} loves soccer`)}

const golu = new Son('Golu',31)
// undefined

Son.prototype
// {lovesSoccer: ƒ}lovesSoccer: ƒ ()constructor: ƒ Son(name,age)[[Prototype]]: Object

Son.__proto__
// ƒ () { [native code] }

golu.__proto__
// {lovesSoccer: ƒ}lovesSoccer: ƒ ()constructor: ƒ Son(name,age)[[Prototype]]: Object

Son.isSon()
// VM1170:1 I am son exclusive utility
// undefined

golu.lovesSoccer()
// VM1341:1 Golu loves soccer
// undefined

Parent.isParent()
// VM484:1 I am parent exclusive static utility
// undefined

papa.isHuman()
// VM649:1 Rashmi Narayan is human afterall
// undefined

Son.isParent()
// VM1911:1 Uncaught TypeError: Son.isParent is not a function
//    at <anonymous>:1:5
// (anonymous) @ VM1911:1

golu.isHuman()
// VM1952:1 Uncaught TypeError: golu.isHuman is not a function
//     at <anonymous>:1:6
// (anonymous) @ VM1952:1

Son.__proto__ === Function.prototype
// true

Son.__proto__ === Parent
// false

Son.__proto__ = Parent
// ƒ Parent(name,age){
//    this.name = name,
//     this.age = age    
// }

Son.isSon()
// VM1170:1 I am son exclusive utility
// undefined

Son.isParent()
// VM484:1 I am parent exclusive static utility
// undefined

Son.__proto__.isParent()
// VM484:1 I am parent exclusive static utility
// undefined

Son.bind()
// ƒ Son(name,age){
//     this.name = name,
//     this.age = age  
// }

Son.__proto__.__proto__.bind
// ƒ bind() { [native code] }

Son.toString
// ƒ toString() { [native code] }

Son.__proto__.__proto__.__proto__.toString
// ƒ toString() { [native code] }

Son.__proto__.__proto__.__proto__.__proto__
// null

Son.prototype
// {lovesSoccer: ƒ}lovesSoccer: ƒ ()constructor: ƒ Son(name,age)[[Prototype]]: Object

Parent.prototype
// {isHuman: ƒ}isHuman: ƒ ()constructor: ƒ Parent(name,age)[[Prototype]]: Object

Son.prototype.__proto__ = Parent.prototype
// {isHuman: ƒ}

Son.prototype
// Parent {lovesSoccer: ƒ}

Son
// ƒ Son(name,age){
//    this.name = name,
//     this.age = age  
// }

Son.__proto__
// ƒ Parent(name,age){
//     this.name = name,
//     this.age = age    
// }

golu.lovesSoccer()
// VM1341:1 Golu loves soccer
// undefined

golu.__proto__.lovesSoccer()
// VM1341:1 undefined loves soccer
// undefined

golu.isHuman()
// VM649:1 Golu is human afterall
// undefined

golu.__proto__.__proto__.isHuman()
// VM649:1 undefined is human afterall
// undefined

golu.toString
// ƒ toString() { [native code] }

golu.__proto__.__proto__.__proto__.toString()
// '[object Object]'

golu.__proto__.__proto__.__proto__.__proto__
// null
