onmessage = function(event) {
    console.log('Received the main thread:', event.data);
    postMessage('Hello, main thread');
}