// METHOD - sort

// arr.sort()
// arr.sort((a,b)=>{sort callback fn..})

// modifies original array
// returns the sorted array

// used to sort an array of values (strings,objects,numbers etc)
// sorting algorithm uses certain calculation to compare two values
    // sorting of an array of CHARACTERS is ACCURATE and as per alphabet rule (a comes first and z comes last)
    // sorting of an array of STRINGS is ACCURATE when using simple Array.sort()
        // sorting of an array of STRINGS is INACCURATE when using sort callback fn
    // sorting of an array of NUMBERS is INACCURATE when using simple Array.sort()
        // sorting of an array of NUMBERS is ACCURATE when using sort callback fn  

// how sort callback function works
    // use it only for sorting an array of numbers
    // arr.sort((a,b)=>{callbackfn logic...})         
    // if sort callback function returns:
        // < 0 : a comes first, b comes second
        // > 0 : b comes first, a comes second
        // === 0 : no order change
    // ascending sort :  Array.sort((a,b) => a - b)
    // descending sort : Array.sort((a,b) => b - a)

const arr1 = ['e', 'g', 'b', 'c', 'a']
const arr2 = ["tomato", "potato", "turmeric", "tunde", "pine"]
const arr3 = [10, 5, 34, 8, 11, 3, 61]
const arr4 = [10, 5, 34, 8, 11, 3, 61]
const arr5 = [10, 5, 34, 8, 11, 3, 61]
const arr6 = ['a1','1a','3c','e5']
const arr7 = ["tomato", "potato", "turmeric", "tunde", "pine"]

arr1.sort()     // works correctly
arr2.sort()     // works correctly
arr5.sort()     // works incorrectly
arr6.sort()     // as per sort algo, 1 comes before a and hence the calculation

arr3.sort((a, b) => a - b)
arr4.sort((a, b) => b - a)
arr7.sort((a, b) => b - a)          // works incorrectly

console.log(`Array1: ${arr1}`)      // Array1: ['a','b','c','e','g']
console.log(`Array2: ${arr2}`)      // Array2: ["pine","potato","tomato","tunde","turmeric"]
console.log(`Array3: ${arr3}`)      // Array3: [3,5,8,10,11,34,61]   
console.log(`Array4: ${arr4}`)      // Array4: [61,34,11,10,8,5,3]
console.log(`Array5: ${arr5}`)      // Array5: [10,11,3,34,5,61,8]
console.log(`Array6: ${arr6}`)      // Array6: ['1a','3c','a1','e5']
console.log(`Array7: ${arr7}`)      // Array6: ["tomato","potato","turmeric","tunde","pine"]
