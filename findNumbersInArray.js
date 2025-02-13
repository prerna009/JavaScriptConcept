//Find the missing number and also if not present the next number is print based on array length.

function missingElement(arr) {
    let missingElements = [];
    let seen = new Set(arr);
    for (let i = 1; i <= arr.length; i++) {
        if (!seen.has(i)) {
            missingElements.push(i);
        }
    }
    return missingElements;
}

const originalArray = [1,1];
console.log("Missing elements in an array: ", missingElement(originalArray)); 