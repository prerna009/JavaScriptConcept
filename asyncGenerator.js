//Example 1:
async function* fruitData() {
    const fruits = ['Apple', 'Banana', 'Grapes', 'Orange', 'Chickoo'];
    for(let item of fruits) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield item;
    }
};

(async () => {
    for await(let data of fruitData()) {
        console.log(data);
    }
})();


//Example 2
async function* streamTimer(count, interval) {
    for(let i=1;i<=count;i++) {
        await new Promise(resolve => setTimeout(resolve, interval));
        yield `Tick: ${i}`;
    }
}

(async () => {
    for await(let time of streamTimer(5,1000)) {
        console.log(time);
    }
})();

(async () => {
    for await(let data of streamTimer(10,300)) {
        console.log(data);
    }
})();