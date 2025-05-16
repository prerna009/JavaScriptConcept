//example-1: using arraybuffer and web worker for transfering object
//This method required web worker library aur browser for running

const worker = new Worker("worker.js");
const buffer = new ArrayBuffer(1024);
worker.postMessage(buffer, [buffer]);
console.log("Main thread buffer:", buffer.byteLength);  //0

//example-2 : using structured clone for transfering object
//This method not need any web worker library aur browser for running 

const buffer2 = new ArrayBuffer(1024);
const clone = structuredClone(buffer2, { transfer: [buffer2] }); //if we not write transfer buffer than it give output 1024
console.log(buffer2.byteLength); //0
console.log(clone.byteLength);  //1024