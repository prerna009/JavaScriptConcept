const worker = new Worker('webworker.js');
worker.postMessage('Hello, worker!');
worker.onmessage = function(event) {
    console.log('Received from worker:', event.data);   
}