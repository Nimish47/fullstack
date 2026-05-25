// // sequecial execution using for loop

const wake = () => new Promise((resolve) => setTimeout(() => resolve('WAKE'), 1000));
const brush = () => new Promise((resolve) => setTimeout(() => resolve('BRUSH'), 1000));
const eat = () => new Promise((resolve) => setTimeout(() => resolve('EAT'), 1000));
const school = () => new Promise((resolve) => setTimeout(() => resolve('SCHOOL'), 1000));
const sleep = () => new Promise((resolve) => setTimeout(() => resolve('SLEEP'), 1000));

const promiseFns = [wake, brush, eat, school, sleep]

const dailyRoutine = async () => {
    for (const fn of promiseFns) {
        const response = await fn()
        console.log(response)
    }
};

dailyRoutine();

// WAKE
// BRUSH
// EAT
// SCHOOL
// SLEEP
