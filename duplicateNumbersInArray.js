//WAP with 2 different logic, to find all duplicate numbers in an array.
//First Logic

function duplicateNumbers(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}
const arr = [23, 4, 5, 1, 2, 1, 2, 7, 6, 4, 6, 5, 9];
console.log(duplicateNumbers(arr));

//Second Logic
function duplicateNumbersInArray(arr1) {
    const newArr = new Set();
    const duplicate = [];
    for (const a1 of arr1) {
        if (newArr.has(a1)) {
            if (!duplicate.includes(a1)) {
                duplicate.push(a1);
            }
        }
        else {
            newArr.add(a1);
        }
    }
    return duplicate;
}
const arr1 = [5, 6, 5, 2, 1, 2, 3, 4, 2, 1, 2, 6, 4, 4];
console.log(duplicateNumbersInArray(arr1));