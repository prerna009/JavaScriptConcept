console.log("Start"); //1
setTimeout(() => console.log("Timeout"),0); //6
Promise.resolve().then(() => console.log("Promise resolved"));//4
async function asyncFunc() {
  console.log("Inside async function"); //2
  await null;
  console.log("After await"); //5
}
asyncFunc();
console.log("End"); //3