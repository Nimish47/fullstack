// METHOD - localeCompare
// referenceString.localeCompare(compareString)
// referenceString.localeCompare(compareString,locales)

// locales - different languages have different set of characters. By default its 'en'
// localeCompare checks the order in which characters appear in the language
// for example - 'a' letter comes before 'b' letter in English alphabet
// if reference string comes before compare string, a negative value is returned (different for different browsers)
// if reference string comes after compare string, a positive value is returned (different for different browsers)
// if reference string and compare string have same order, 0 is returned 

console.log('a'.localeCompare('b'))                 // -1
console.log('b'.localeCompare('a'))                 //  1
console.log('a'.localeCompare('a'))                 //  0

// a comes before 1
// 1 comes before 5
console.log('a1'.localeCompare('1a'))               // 1
console.log('a1'.localeCompare('a5'))               // -1
console.log('1a'.localeCompare('5a'))               // -1

// m comes after j
console.log('amit'.localeCompare('ajit'))           // 1

// s comes after b
console.log('sumit'.localeCompare('bablu'))         // 1    

// ä comes before z in german language
console.log('ä'.localeCompare('z', 'de'))           // -1

// ä comes after z in swedish language
console.log('ä'.localeCompare('z', 'sv'))           // 1

