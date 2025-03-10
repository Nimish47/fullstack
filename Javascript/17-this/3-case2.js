// CASE 2. Outside of everything but inside a function

// Calling this directly inside:
    // Normal function
        // NodeJs: points to global object (IMP.)
        // browser: points to window object
    // Arrow Function
        // NodeJs: points to module.exports
        // Browser: points to Window object

function normalFn () {
    console.log(this)
}

const arrowFn = () => {
    console.log(this === module.exports)
    console.log(this)
}

normalFn()
{/* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 29.24489998817444,
      nodeStart: 1.9592999815940857,
      v8Start: 4.261799991130829,
      bootstrapComplete: 22.1913999915123,
      environment: 11.792199969291687,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1726729693054.99
  },
  fetch: [AsyncFunction: fetch]
} */}


arrowFn()
// true
// {}