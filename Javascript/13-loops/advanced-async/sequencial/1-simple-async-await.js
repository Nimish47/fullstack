// // sequecial execution using async/await [NO LOOP]

const wake = () => new Promise((resolve) => setTimeout(() => resolve('WAKE'), 1000))
const brush = () => new Promise((resolve) => setTimeout(() => resolve('BRUSH'), 1000))
const eat = () => new Promise((resolve) => setTimeout(() => resolve('EAT'), 1000))
const school = () => new Promise((resolve) => setTimeout(() => resolve('SCHOOL'), 1000))
const sleep = () => new Promise((resolve) => setTimeout(() => resolve('SLEEP'), 1000))


const dailyRoutine = async () => {

    const res1 = await wake()
    console.log(res1)
    const res2 =  await brush()
    console.log(res2)
    const res3 =  await eat()
    console.log(res3)
    const res4 =  await school()
    console.log(res4)
    const res5 = await sleep()
    console.log(res5)
}

dailyRoutine()

// WAKE
// BRUSH
// EAT
// SCHOOL
// SLEEP


