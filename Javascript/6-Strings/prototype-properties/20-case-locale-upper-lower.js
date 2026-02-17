// METHOD - toLocaleUpperCase | toLocaleLowerCase

// String.toLocaleUpperCase()
// String.toLocaleUpperCase(locales)
// String.toLocaleLowerCase()
// String.toLocaleLowerCase(locales)

// locales- which country's language to be used to perform operation
// so if the string is in turkish language, it makes sense to perform operation using turkish locales
// returns a string

const str = 'I like people of Ukraine'

// if no locale used, behaves same as toUpperCase and toLowerCase
console.log(str.toLocaleUpperCase())                // I LIKE PEOPLE OF UKRAINE
console.log(str.toLocaleLowerCase())                // i like people of ukraine  


// using locales
// upper-casing in english language and turkish language is different as we can see
// I in english but İ in turkish
console.log(str.toLocaleUpperCase('en-US'))         // I LIKE PEOPLE OF UKRAINE
console.log(str.toLocaleUpperCase('tr'))            // I LİKE PEOPLE OF UKRAİNE