// METHOD - replaceAll
// String.replaceAll(searchString or regex, replaceString)
// String.replaceAll(searchString or regex, conditionalFunction)

// replaceAll basically matches and replaces all possible matches and not just first(like repalce)
// hence, it is case 2 of replace - /g
// if regex is inside /regex/, need to use /g as well, otherwise error. See example.
  // /twinkle/ - will throw error
  // /twinkle/g - won't throw error

// conditionalFunction  - callbackFunction to calculate replaceString    

// if regex = string, it addds /g under the hood.

const str = 'Twinkle twinkle little twinkle star'

// all matches replaced (internally 'twinkle' converted to /twinkle/g)
console.log(str.replaceAll('twinkle', 'pringle'))                      // Twinkle pringle little pringle star

// throws error - /g not used
// console.log(str.replaceAll(/twinkle/, 'pringle'))                   // TypeError: String.prototype.replaceAll 
                                                                       //called with a non-global RegExp argument
// all matches replaced
console.log(str.replaceAll(/twinkle/g, 'pringle'))                     // Twinkle pringle little pringle star

// all matches replaced (case insensitive search)
console.log(str.replaceAll(/twinkle/gi, 'pringle'))                    // pringle pringle little pringle star

// conditional function used - all matches + case insensitive + uppercased
console.log(str.replaceAll(/twinkle/gi, (match) => match.toUpperCase()))       // TWINKLE TWINKLE little TWINKLE star




