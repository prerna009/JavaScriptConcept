//Example-1

console.log('Start'); //1

setTimeout(() => {
    console.log('Macrotask'); //4
}, 0);

Promise.resolve().then(() => {
    console.log('Microtask'); //3 because microtask priority is higher than macrotask queue.
});

console.log('End'); //2

//Example-2

console.log('1. Start'); //1

setTimeout(() => {
    console.log('2. setTimeout Macrotask'); //8
}, 0);

setInterval(() => {
    console.log('3. setInterval Macrotask'); //9
},1000);

Promise.resolve().then(() => {
    console.log('4. Promise Microtask 1'); //4
}).then(() => {
    console.log('5. Promise Microtask 2'); //7
});

queueMicrotask(() => {
    console.log('6. queueMicrotask'); //5
});

(async function() {
    console.log('7. Inside async function (sync part)'); //2
    await null;
    console.log('8. After await (Microtask)'); //6
})();

console.log('9. End of main script'); //3
