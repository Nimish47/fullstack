// Code flow
/**
 * Flow is similar to previous async examples
 * Purpose of this example is to show that
 *      Even a callback with 0ms is of less preference or takes more time to:
 *          move from event queue to call stack as compared to
 *          code appearing sequencially.
 */

const goodMorning = () => {
    console.log('Good Morning!')
}

const miniBreak = () => {
    setTimeout(() => {
        console.log('ye toh shuru hote hue hi khatam ho gaya')
    },0);
}

const lastPeriod = () => {
    console.log('Last period over')
}

goodMorning()
miniBreak()
lastPeriod()
console.log('GoodBye! See you tomorrow')

// Good Morning!
// Last period over
// GoodBye! See you tomorrow
// ye toh shuru hote hue hi khatam ho gaya