/* eslint-disable no-restricted-globals */

self.onmessage = (event) => {
  if (event.data !== "start") {
    return;
  }

  let sum = 0;

  for (let i = 0; i < 5000000000; i++) {
    sum = i;
  }

  self.postMessage({
    status: "complete",
    value: sum,
  });
};