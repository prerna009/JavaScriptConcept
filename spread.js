let args1=[2,4,6];
let args2 = [7,44,3,21];
console.log(0,...args1,1,...args2); //merged the two array using spread syntax

//Both result is same
let str="Hello";
console.log([...str]);
console.log(Array.from(str));

//copying array using spread
let arr = [12,44,45];
let copyArr = [...arr];
console.log(JSON.stringify(arr)===JSON.stringify(copyArr));
console.log(arr===copyArr);
arr.push(4);
console.log(arr);
console.log(copyArr);

//copying object using spread
let obj = {a:1,b:2,c:3};
let copyObj = {...obj};
console.log(obj===copyObj);
console.log(JSON.stringify(obj)===JSON.stringify(copyObj));
obj.d = 4;
console.log(obj);
console.log(copyObj);