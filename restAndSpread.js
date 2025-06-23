let arr1 = [1,2,3,4,5];
let arr2 = arr1;
arr3 = [...arr2]
arr1.push(arr3)

console.log(arr1.length) //6
arr2.push(1)
console.log(arr1.length) //7
console.log(arr3.length) //5

let arr4 = [1,2,3,4,5];
let arr5 = arr4;
arr6 = [...arr5]
arr4.push(...arr6)

console.log(arr4.length) //10
arr5.push(1)
console.log(arr4.length) //11
console.log(arr6.length) //5

let a = [1,2,3,4]
let b =[a,5,6,7]
console.log(b); // [[1,2,3,4],5,6,7]
