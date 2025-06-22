self.onmessage = function(event) {
  const number = event.data;
  let result = number * number;
  postMessage(result); // Send result back to main thread
};
