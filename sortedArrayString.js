const arr = ['s', 1, 'a', -8, 'e', -7, 'p', 2];

function sortedArray(arr) {
    let sortedArr = [...arr];
    
    for (let i = 0;i<sortedArr.length - 1;i++) {
        for (let j = 0;j<sortedArr.length - 1 - i;j++) {
            if (String(sortedArr[j]) > String(sortedArr[j + 1])) {
            let temp = sortedArr[j];
            sortedArr[j] = sortedArr[j+ 1];
            sortedArr[j+1] = temp;
            }
        }
    }
    return sortedArr;
}

console.log(sortedArray(arr));