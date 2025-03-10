// A very basic intro with Dates - a very important built-in objects of Javascript
    // we will study this in much more detail sometime later...
// Background on time:
    // Computer times arbitrarily starts at a millisecond clock at midnight on January 1, 1970.
    // Every timestamp before or after is denoted by adding or subtracting milliseconds. 
    // When you use seconds to count, it’s known as Unix epoch time.      

// getTime: returns the time in milliseconds since the epoch date of January 1, 1970. 
// getMonth: returns the month (“0” is January)
// getDate: returns the day of the month
// getHours: returns the hour
// getDay:  returns the day of the week (“0” is Sunday)
// getFullYear: returns the year

const { log } = console
const today = new Date()

log(today)                      // 2024-09-18T17:10:25.870Z
log(today.getTime())            // 1726679425870
log(today.getMonth())           // 8 
log(today.getDate())            // 18 
log(today.getHours())           // 22
log(today.getDay())             // 3   
log(today.getFullYear())        // 2024