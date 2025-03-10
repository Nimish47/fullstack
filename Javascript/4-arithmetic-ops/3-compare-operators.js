// compare operators

/**
 * greater than >
 * less than <
 * value equality ==
 * greater than or equal value >=
 * lesser than or equal value <=
 * ===
 *  for primitive comparisons, it means value and type equality
 *  for non primitive comparisons, it means reference equality
 */

console.log(2>2)    //false
console.log(2==2)   //true
console.log(2<=2)   //true

// string and number comparison
console.log(3 <= "4")   //true, "4" converted to number 4 and compared
console.log("4" >= "3") //true, both "4" and "3" converted to number and compared
console.log("2" == 2)   //true, "2" converted to 2 and compared
console.log("2" === 2)  //false, data type not same of both


// comparison with null
console.log(null == 0)  //false,null is not equal to zero
console.log(null === 0) //false,both data and data-type is not equal to zero 
console.log(null >= 0) //true, null auto-converts to zero as comparison operator involved
console.log(null > 0) //false, null auto-converts to zero as comparison operator involved
console.log(null <= 0) //true, null auto-converts to zero as comparison operator involved
console.log(null < 0) //false, null auto-converts to zero as comparison operator involved


// comparison with undefined
console.log(undefined == 0)  //false
console.log(undefined === 0) //false
console.log(undefined >= 0) //false
console.log(undefined > 0) //false
console.log(undefined <= 0) //false
console.log(undefined < 0) //false
