const arr = [23, 8, 9, 56, 80, 12, 1, 10];

//Bubble sort in ascending order. Sort the given array in ascenmding Order.
function bubbleSortInAscendingOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] + arr[j + 1];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] = arr[j] - arr[j + 1];
            }
        }
    }
    return arr;
}
console.log('Ascending Order : ', bubbleSortInAscendingOrder(arr));

//Sort the arr in descending Order.
function bubbleSortInDescendingOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                arr[j] = arr[j] + arr[j + 1];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] = arr[j] - arr[j + 1];
            }
        }
    }
    return arr;
}
console.log('Descending Order : ', bubbleSortInDescendingOrder(arr));