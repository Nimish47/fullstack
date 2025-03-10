// METHOD - replace
// String.replace(searchString or regex, replaceString)
// String.replace(searchString or regex, conditionalFunction)

// returns a new string
    // Case 1: if /g not used: only FIRST match searchString replaced with replaceString
    // Case 2: if /g used: ALL matched searchString replaced with replaceString

// conditionalFunction  - callbackFunction to calculate replaceString    

const str = 'Twinkle twinkle little twinkle star'

// only first match replaced
console.log(str.replace('twinkle', 'pringle'))                              // Twinkle pringle little twinkle star

// same as above
console.log(str.replace(/twinkle/, 'pringle'))                              // Twinkle pringle little twinkle star

// all matches replaced
console.log(str.replace(/twinkle/g, 'pringle'))                             // Twinkle pringle little pringle star

// all matches replaces (case insensitive search)
console.log(str.replace(/twinkle/gi, 'pringle'))                            // pringle pringle little pringle star

// conditional function used - all matches + case insensitive + uppercased
console.log(str.replace(/twinkle/gi, (match) => match.toUpperCase()))       // TWINKLE TWINKLE little TWINKLE star




