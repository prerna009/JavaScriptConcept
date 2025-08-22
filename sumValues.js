// Sum of numeric value in both array and object data.

let originalObj = [
    678,
    'john',
    89,
    'IT',
    'sale',
    {
        a: 200,
        b: [
            {
                s: 'name',
                d: 'age',
                e: {
                    f: 90,
                    g: [
                        6,
                        {
                            u: 72,
                            i: 'june',
                            j: 10
                        }
                    ],
                    h: 'u'
                }
            }
        ],
        c: 60,
        d: 'UK'
    }
];

function sumOfNumericValues(obj) {
    let totalSum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            if (Array.isArray(obj[key])) {
                for (let arr of obj[key]) {
                    if (typeof arr === 'object') {
                        totalSum += sumOfNumericValues(arr);
                    } else if (typeof arr === 'number') {
                        totalSum += arr;
                    }
                }
            } else {
                totalSum += sumOfNumericValues(obj[key]);
            }
        } else if (typeof obj[key] === 'number') {
            totalSum += obj[key];
        }
    }
    return totalSum;
}

console.log('Total sum of numbers value is ', sumOfNumericValues(originalObj));