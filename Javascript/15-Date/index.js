// The Date Object in javascript

// TODOS

// The new Date() constructor

// create a default date object
const date = new Date()
//console.log(date) // 2025-10-03T12:45:52.398Z

// important methods
let d = new Date();

// console.log(d.getFullYear());   // 2025
// console.log(d.getMonth());      // 0-11 (October = 9)
// console.log(d.getDate());       // Day of month (1-31)
// console.log(d.getDay());        // Day of week (0=Sunday, 6=Saturday)
// console.log(d.getHours());      // 0-23
// console.log(d.getMinutes());    // 0-59
// console.log(d.getSeconds());    // 0-59
// console.log(d.getTime());       // Timestamp in ms since 1970
// console.log(d.getTimezoneOffset()); // Difference from UTC in minutes


// Formatting dates
let d2 = new Date();

// console.log(d2.toString());       // Fri Oct 03 2025 18:36:16 GMT+0530 (India Standard Time)
// console.log(d2.toDateString());   // "Fri Oct 03 2025"
// console.log(d2.toTimeString());   // "18:32:12 GMT+0530 (India Standard Time)"
// console.log(d2.toISOString());    // "2025-10-03T13:02:12.123Z"
// console.log(d2.toUTCString());    // "Fri, 03 Oct 2025 13:02:12 GMT"
// console.log(d2.toLocaleDateString("en-IN")); // "3/10/2025"
// console.log(d2.toLocaleTimeString("en-IN")); // "6:32:12 pm"


// Console logging a date object - Browser behaviour v/s Node behaviour
    // browser
        // Fri Oct 03 2025 18:20:22 GMT+0530 (India Standard Time)
    // node
        // 2025-10-03T12:45:52.398Z

// create a custom date object

// from year,month,date,hour, mins
let d3 = new Date(2024, 9, 3, 18, 30); // Oct 3, 2024, 18:30
//console.log(d3) // 2024-10-03T13:00:00.000Z

// from timestamp
    let d4 = new Date(1633359600010);
    //console.log(d4) //2021-10-04T15:00:00.010Z

// using setter methods
    let d5 = new Date()
    d5.setFullYear(2030);
    d5.setMonth(5);       // June
    d5.setDate(15);
    d5.setHours(10, 45, 0); // hours, minutes, seconds
    // console.log(d5) //2030-06-15T05:15:00.482Z


// So many timezones!
    // explain that local times are different in diff parts of worls
    // in india it is 7pm now, in some part of usa it would be 7am now, haha
    // hence simetimes GMT is used as a common ground
    // indian says i am available b/w from (x,y) GMT , american says i 
    // am available b/w (p,q) GMT 

// comparing two timestamps 
let date1 = new Date("2025-10-03T12:00:00Z"); // UTC
let date2 = new Date("2022-10-03T12:00:00+03:30"); // IST

// logic to compare
if (date1 === date2) console.log("Dates are equal") 
else if (date1 > date2) console.log("date1 is later")
else console.log("date2 is later")


// Difference b/w two timestamps
let diffMs = date1 - date2;          // difference in milliseconds
let diffSeconds = diffMs / 1000;
let diffMinutes = diffMs / (1000 * 60);
let diffHours   = diffMs / (1000 * 60 * 60);
let diffDays    = diffMs / (1000 * 60 * 60 * 24);


// console.log(diffDays, "days"); // 1096.1458333333333 days
// console.log(diffHours, "hours");  //26307.5 hours
// console.log(diffSeconds, "seconds"); // 94707000 seconds
// console.log(diffMinutes, "minutes"); // 1578450 minutes
// console.log(diffMs, "mmilliseconds"); // 94707000000 mmilliseconds
