// agenda: this in a global context


// case: 
// call "this" out of everything

// case: on browser
// refers window 
console.log(Object.is(this,window))                 // true


// case: on nodejs
// refers module.exports 
console.log(Object.is(this,module.exports))         // true