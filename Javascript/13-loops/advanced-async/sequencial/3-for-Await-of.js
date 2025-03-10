// sequecial execution using for-Await-of loop

// If you want to execute the tasks sequentially using a for await...of loop,
// you need to work with asynchronous iterables or generators.
// In example below, our asynchronous generator function (async function*) yields promises sequentially.
// Each yield statement creates a promise (e.g., wake(), brush()) and gives control back to the for await
// loop until that promise resolves.
// for await of waits for each promise yielded by dailyTasks() to resolve before proceeding to the next iteration.
// This ensures each task is executed in sequence

const wake = () => new Promise((resolve) => setTimeout(() => resolve('WAKE'), 1000));
const brush = () => new Promise((resolve) => setTimeout(() => resolve('BRUSH'), 1000));
const eat = () => new Promise((resolve) => setTimeout(() => resolve('EAT'), 1000));
const school = () => new Promise((resolve) => setTimeout(() => resolve('SCHOOL'), 1000));
const sleep = () => new Promise((resolve) => setTimeout(() => resolve('SLEEP'), 1000));

// Asynchronous generator that yields promises
async function* dailyTasks() {
  yield wake();
  yield brush();
  yield eat();
  yield school();
  yield sleep();
}

const dailyRoutine = async () => {
  for await (const response of dailyTasks()) {
    console.log(response); // Will log each task with a 1 second delay in between
  }
};

dailyRoutine();

// WAKE
// BRUSH
// EAT
// SCHOOL
// SLEEP
