// METHOD - matchAll
// String.matchAll(regex or string)
// returns an regex string iterator operator. To access data, spread in array

// matchAll basically matches all possible matches and not just first(like match)
// hence, it is case 2 of match - /g
// if regex is inside /regex/, need to use /g as well, otherwise error. See example.
  // /ain/ - will throw error
  // /ain/g - won't throw error

// returns: Object [RegExp String Iterator] {}

// case sensitive matches

// if regex = string, it addds /g under the hood.


const str = 'No pain no gain with some AIN!'

// below exp translates to internally - /ain/g
console.log([...str.matchAll('ain')])
/** 
 * [
  [
    'ain',
    index: 4,
    input: 'No pain no gain with some AIN!',
    groups: undefined
  ],
  [
    'ain',
    index: 12,
    input: 'No pain no gain with some AIN!',
    groups: undefined
  ]
]
*/
// all matches returned
console.log([...str.matchAll(/ain/g)])
/**
 * [
  [
    'ain',
    index: 4,
    input: 'No pain no gain with some AIN!',
    groups: undefined
  ],
  [
    'ain',
    index: 12,
    input: 'No pain no gain with some AIN!',
    groups: undefined
  ]
]
 */

// all matches + case insensitive
console.log([...str.matchAll(/ain/gi)])
/**
 * [
  [
    'ain',
    index: 4,
    input: 'No pain no gain with some AIN!',
    groups: undefined
  ],
  [
    'ain',
    index: 12,
    input: 'No pain no gain with some AIN!',
    groups: undefined
  ],
  [
    'AIN',
    index: 26,
    input: 'No pain no gain with some AIN!',
    groups: undefined
  ]
]
 */
// if no match found - empty array returned
console.log([...str.matchAll(/x/g)])        //[]

// if regex used and /g not added, returns error
console.log([...str.matchAll(/ain/)])       //TypeError: String.prototype.matchAll 
                                            // called with a non-global RegExp argument