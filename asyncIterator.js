//async iterator ex-1
const asyncIterable2 = {
    [Symbol.asyncIterator]() {
        let fruits = ['Apple', 'Banana', 'Orange'];
        let index = 0;
        return {
            async next() {
                if (index < fruits.length) {
                    await new Promise(res => setTimeout(res, 500));
                    return { value: fruits[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

(async () => {
    for await (let data of asyncIterable2) {
        console.log(data);
    }
})();

//example-2

const asyncUserFetcher = {
    [Symbol.asyncIterator]() {
        const users = ['Alice', 'Bob', 'John', 'Zoya'];
        let index = 0;
        return {
            async next() {
                if (index < users.length) {
                    await new Promise(resolve => setTimeout(resolve, 100));
                    const user = users[index++];
                    console.log(`Fetched: ${user}`);
                    return { value: user, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

(async () => {
    console.log('Start fetching users...\n');
    for await (const user of asyncUserFetcher) {
        console.log(`Received: ${user}`);
    }
    console.log('\nAll users fetched!');
})();

//example-3
const asyncTempIterable = {
    [Symbol.asyncIterator]() {
        let count = 0;
        const maxReadings = 5;
        return {
            async next() {
                if (count < maxReadings) {
                    await new Promise(resolve => setTimeout(resolve, 100));
                    const temp = (20 + Math.random() * 10).toFixed(2);
                    console.log(`Reading ${count + 1}: ${temp}°C`);
                    count++;
                    return { value: temp, done: false };
                } else {
                    console.log('\nSensor stopped.');
                    return { done: true };
                }
            }
        };
    }
};

(async () => {
    console.log('Temperature Readings\n');
    for await(let temp of asyncTempIterable) {
        console.log(`Received temp: ${temp}°C`);
    }
})();

//Chaining async iterator
async function* doubleValues(asyncIterable) {
    for await (let val of asyncIterable) {
        yield val * 2;
    }
}

const asyncIterables = {
    [Symbol.asyncIterator]() {
        let i = 1;
        return {
            async next() {
                if (i <= 3) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    return { value: i++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

(async () => {
    for await (const num of doubleValues(asyncIterables)) {
        console.log(num);
    }
})();