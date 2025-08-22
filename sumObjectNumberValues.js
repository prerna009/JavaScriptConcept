// sum only object numeric value.

let originalObj = [
    6,
    'john',
    8,
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

function sumOnlyObjectValues(obj) {
    let totalCount = 0;
    debugger
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            if (Array.isArray(obj[key])) {
                for (let arr of obj[key]) {
                    totalCount += sumOnlyObjectValues(arr);
                }
            } else {
                totalCount += sumOnlyObjectValues(obj[key]);
            }
        } else if (typeof obj[key] === 'number') {
            totalCount += obj[key];
        }
    }
    return totalCount;
}

console.log('Sum of object numeric values is ', sumOnlyObjectValues(originalObj));