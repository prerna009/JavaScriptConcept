//convert nested array into flattend array.

function flattenArray(arr) {
    let flat = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flat = flat.concat(flattenArray(arr[i]));
        } else {
            flat.push(arr[i]);
        }
    }
    return flat;
}

const arr = [[[1, 2], [[3], [[4, 5, 6], [7, 8]]]]];
console.log(flattenArray(arr));