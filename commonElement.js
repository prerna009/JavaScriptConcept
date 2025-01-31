function commonElement(arr1, arr2) {
    let intersection = [];
    if (arr1 === arr2) return intersection;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !intersection.includes(arr1[i])) {
                intersection.push(arr1[i]);
            }
        }
    }
    return intersection;
}
const arr1 = [1, 2, 6, 8, 4, 3, 6, 2,11,3];
const arr2 = [2, 6, 5, 7, 4, 3,11,3];
console.log(commonElement(arr1, arr2));