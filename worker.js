onmessage = function(e) {
  const receivedBuffer = e.data;
  console.log("Worker received buffer size:", receivedBuffer.byteLength); //1024
};

//It is not copying - it is transfering data